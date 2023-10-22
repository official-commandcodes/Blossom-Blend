const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const Email = require('../utils/email');
const { AppError } = require('../utils/appError');

const createToken = async (res, user, statusCode) => {
     const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: '30d',
     });

     const cookieOptions = {
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          httpOnly: true,
     };

     if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

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
          // // check if email already exist
          const user = await User.findOne({ email: req.body.email });

          if (user) {
               // return next(new AppError('User already exist', 400));
               return next('User already existed');
          }

          const newUser = await User.create(req.body);
          const emailValidateToken = await newUser.createEmailToken();

          // {
          //      validateBeforeSave: false;
          // }

          await newUser.save();

          // Send Password validation token and email
          const validateEmailUrl = `${req.protocol}://${req.get(
               'host'
          )}/api/v1/users/validate/${newUser._id}/${emailValidateToken}`;

          await new Email(newUser, validateEmailUrl).sendEmailValidation();

          // send welcome email
          await new Email(newUser,`${req.protocol}://${req.get('host')}/products`).sendWelcome(); // prettier-ignore

          await createToken(res, user, 201);
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
               return next('Provide email and Password');
          }

          const user = await User.findOne({ email: req.body.email }).select(
               '+password'
          );

          // // check if there is no user
          if (!user) {
               return next('You have not signed up on our website!');
          }

          // check whether user haven't validate their email
          if (!user.emailValid) {
               return next('Your email as not be validated!');
          }

          const correct = await user.correctPassword(
               req.body.password,
               user.password
          );

          // compare password
          if (!correct) {
               return next('User password is incorrect!');
          }

          await new Email(user).sendLogInAccess();

          await createToken(res, user, 200);
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

module.exports = { signup, login, validateEmail };
