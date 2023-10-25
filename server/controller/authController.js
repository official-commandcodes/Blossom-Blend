const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Email = require('../utils/email');
const { AppError } = require('../utils/appError');

const createToken = (res, user, statusCode) => {
     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: '30 days',
     });

     const cookieOptions = {
          domain: 'blossom-blend.vercel.app',
          maxAge: 30 * 24 * 60 * 60 * 1000,
          httpOnly: true,
          path: '/',
          SameSite: false,
     };

     if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

     res.cookie('blossomblendtoken', token, cookieOptions);

     user.password = undefined;

     res.status(statusCode).json({
          status: 'success',
          token,
          user,
     });
};

// SIGN UP
const signup = async (req, res, next) => {
     try {
          // check if email already exist
          const user = await User.findOne({ email: req.body.email });

          if (user) {
               return next(new AppError('Email already exist', 400));
          }

          const newUser = await User.create(req.body);

          const emailValidateToken = await newUser.createEmailToken();

          // {
          //      validateBeforeSave: false;
          // }

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
          // check if there is no email or password
          if (!req.body.email || !req.body.password) {
               return next(new AppError('Provide email and Password', 400));
          }

          const user = await User.findOne({ email: req.body.email }).select(
               '+password'
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
                    new AppError('Your email as not be validated!', 404)
               );
          }

          const correct = await user.correctPassword(
               req.body.password,
               user.password
          );

          // compare password
          if (!correct) {
               return next(new AppError('User password is incorrect!', 404));
          }

          await new Email(user).sendLogInAccess();

          await createToken(res, user, 200);
     } catch (err) {
          next(err);
     }
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
               },
          });
     } catch (err) {
          next(err);
     }
};

// VALIDATE EMAIL
const validateEmail = async (req, res, next) => {
     try {
          // Find user with the param id
          const user = await User.findOne({ _id: req.params.userId });

          const compare = await user.compareToken(
               req.params.emailValidateToken,
               user.emailValidation
          );

          // Compare (emailValidateToken) with the database hashed token
          if (!compare) {
               return next('Invalid Email Token');
          }

          // if it is equal: update email to valid email
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
     const token = req.cookies.blossomblendtoken;

     if (!token) return next(new AppError("You've not logged in.", 400));

     const decoded = jwt.verify(token, process.env.JWT_SECRET);

     if (!decoded) return next(new AppError('Invalid token', 400));

     const user = await User.findOne({ _id: decoded.id });

     if (!user) return next(new AppError('User does not exist', 404));

     req.user = user;

     next();
};

module.exports = { signup, login, validateEmail, getLoggedInUser, protect };
