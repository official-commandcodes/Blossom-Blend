const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Email = require('../utils/email');
const { AppError } = require('../utils/appError');

const createToken = (res, user, statusCode) => {
     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: '30 days',
     });

     const cookieOptions = {
          maxAge: 30 * 24 * 60 * 60 * 1000,
          httpOnly: true,
          path: '/',
     };

     if (process.env.NODE_ENV === 'production') {
          cookieOptions.secure = true;
          cookieOptions.sameSite = 'None';
     }

     user.password = undefined;

     res.status(statusCode)
          .cookie('blossomblendtoken', token, cookieOptions)
          .json({
               status: 'success',
               token,
               user,
          });
};

// SIGN UP
const signup = async (req, res, next) => {
     try {
          if (
               !req.body.email ||
               !req.body.name ||
               !req.body.password ||
               !req.body.passwordConfirm
          ) {
               return next(new AppError('All fields are required', 400));
          }
          // check if email already exist
          const user = await User.findOne({ email: req.body.email });

          if (user) {
               return next(new AppError('Email already exist', 400));
          }

          const newUser = await User.create(req.body);

          const emailValidateToken = await newUser.createEmailToken();

          await newUser.save();

          // Send Password validation token and email
          const mainUrl =
               process.env.NODE_ENV === 'production'
                    ? 'https://blossom-blend.vercel.app'
                    : 'http://localhost:5173';

          const validateEmailUrl = `${mainUrl}/auth/email-verification/${newUser._id}/${emailValidateToken}`;

          await new Email(newUser, validateEmailUrl).sendEmailValidation();

          // send welcome email
          await new Email(newUser, `${mainUrl}/products`).sendWelcome();

          createToken(res, newUser, 201);
     } catch (err) {
          // return next(new AppError(err.message, 400));
          next(err);
     }
};

// LOGIN
const login = async (req, res, next) => {
     try {
          // GOOGLE SIGN IN
          if (req.body.clientId && req.body.token) {
               const client = new OAuth2Client(req.body.clientId);

               const ticket = await client.verifyIdToken({
                    idToken: req.body.token,
                    audience: req.body.clientId,
               });

               const payload = ticket.getPayload();

               // 1) check if user already exist in our database
               const user = await User.findOne({ email: payload.email });

               if (!user) {
                    const user = await User.create({
                         name: payload.name,
                         email: payload.email,
                         emailValid: true,
                         photo: payload.picture,
                         password: payload.sub,
                         passwordConfirm: payload.sub,
                    });

                    await new Email(user).sendLogInAccess();

                    return createToken(res, user, 200);
               }

               return createToken(res, user, 200);
          }

          // MANUALLY SIGN IN
          // check if there is no email or password
          if (!req.body.email || !req.body.password) {
               return next(new AppError('Provide email and Password', 400));
          }

          const user = await User.findOne({ email: req.body.email }).select(
               '+password +emailValid'
          );

          // check if there is no user
          if (!user) {
               return next(
                    new AppError('You have not signed up on our website!', 404)
               );
          }

          // check whether user haven't validate their email
          if (!user.emailValid) {
               return next(
                    new AppError('Your email as not be validated!', 400)
               );
          }

          const correct = await user.correctPassword(
               req.body.password,
               user.password
          );

          // compare password
          if (!correct) {
               return next(new AppError('User password is incorrect!', 400));
          }

          await new Email(user).sendLogInAccess();

          createToken(res, user, 200);
     } catch (err) {
          next(err);
     }
};

// LOGOUT
const logout = async (req, res, next) => {
     res.status(200)
          .cookie('blossomblendtoken', 'You logged out', {
               path: '/',
               httpOnly: true,
               secure: process.env.NODE_ENV === 'production' ? true : false,
               sameSite: process.env.NODE_ENV === 'production' ? 'None' : '',
          })
          .json({
               status: 'success',
               mesage: 'You have been successfully logout',
          });
};

// LOGGED IN USER
const getLoggedInUser = async (req, res, next) => {
     try {
          const token = req.cookies.blossomblendtoken;

          if (!token) return next(new AppError('You are not logged in', 400));

          const decoded = jwt.verify(token, process.env.JWT_SECRET);

          if (!decoded) return next(new AppError('Token expired', 400));

          const user = await User.findOne({ _id: decoded.id });

          if (!user) return next(new AppError('There is no such user', 400));

          res.status(200).json({
               status: 'success',
               user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    wishlists: user.wishlists,
                    carts: user.carts,
                    address: user.address,
                    phoneNumber: user.phoneNumber,
                    photo: user.photo,
                    slug: user.slug,
                    writeReview: user.writeReview,
               },
          });
     } catch (err) {
          next(err);
     }
};

// VALIDATE EMAIL
const validateEmail = async (req, res, next) => {
     try {
          // Find user with the param id and manually select emailValidation
          const user = await User.findOne({ _id: req.params.userId });

          if (!user.emailValidation) return next('Invalid sent token!');

          const compare = await user.compareToken(
               req.params.emailValidateToken,
               user.emailValidation
          );

          // Compare (emailValidateToken) with the database hashed token
          if (!compare) {
               return next('Invalid Email Token');
          }

          // if it is equal: update email to valid email and remove emailValidation field
          user.emailValid = true;
          user.emailValidation = undefined;

          await user.save();

          res.status(200).json({
               status: 'success',
               message: 'Email has been validated',
          });
     } catch (err) {
          next(err);
     }
};

// PROTECTED ROUTES MIDDLEWARE
const protect = async (req, res, next) => {
     // GET TOKEN
     const token = req.cookies.blossomblendtoken;

     if (!token) return next(new AppError("You've not logged in.", 400));

     // VERIIFY TOKEN
     jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
          if (err) {
               return res.status(400).json({
                    status: 'fail',
                    message: err.message,
               });
          }

          if (!decoded) return next(new AppError('Invalid token', 400));

          // GET USER IF TOKEN IS VALID
          const user = await User.findOne({ _id: decoded.id });

          // CHECK IF USER EXIST
          if (!user) return next(new AppError('User does not exist', 404));

          req.user = user;

          next();
     });
};

const forgotPassword = async (req, res, next) => {
     try {
          // find user with the provided email
          const user = await User.findOne({ email: req.body.email });

          if (!user) {
               return next('User does not exist anymore');
          }

          const token = await user.passwordResetVariable();

          await user.save();

          // constructed reset url
          const resetUrl = `${
               process.env.NODE_ENV === 'production'
                    ? `https://blossom-blend.vercel.app/auth/reset-password/${user.slug}/${token}`
                    : `http://localhost:5173/auth/reset-password/${user.slug}/${token}`
          }`;

          // send email
          new Email(user, resetUrl).sendPasswordResetToken();

          res.status(200).json({
               status: 'success',
               message: 'Email sent successfully!',
          });
     } catch (err) {
          next(err);
     }
};

const verifyParams = async (req, res, next) => {
     try {
          const user = await User.findOne({ slug: req.body.username });

          if (!user) {
               return next('User does not exist');
          }

          if (!user.passwordResetToken) {
               return res.status(400).json({
                    status: 'fail',
                    message: 'Invalid tokens',
               });
          }

          if (
               !(await user.checkPasswordResetToken(
                    req.body.token,
                    user.passwordResetToken
               ))
          ) {
               return res.status(400).json({
                    status: 'fail',
                    message: 'Invalid token',
               });
          }

          user.passwordResetToken = undefined;

          await user.save();

          res.status(200).json({
               status: 'success',
               message: 'Token validated successfully',
          });
     } catch (err) {
          next(err);
     }
};

const updatePassword = async (req, res, next) => {
     try {
          if (!req.body.password && !req.body.passwordConfirm) {
               return next(
                    new AppError(
                         'Please provide both password and passwordConfirm',
                         400
                    )
               );
          }

          const user = await User.findOne({ _id: req.user._id });

          user.password = req.body.password;
          user.passwordConfirm = req.body.passwordConfirm;
          user.passwordResetToken = undefined;

          await user.save();

          res.status(200).json({
               status: 'success',
               message: 'password Updated',
          });
     } catch (err) {
          next(err);
     }
};

module.exports = {
     signup,
     login,
     validateEmail,
     getLoggedInUser,
     protect,
     forgotPassword,
     verifyParams,
     updatePassword,
     logout,
};
