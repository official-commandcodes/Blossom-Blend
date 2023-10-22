const User = require('../models/user');
const Email = require('../utils/email');
const { AppError } = require('../utils/appError');

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
          )}/validate/${emailValidateToken}`;

          await new Email(newUser, validateEmailUrl).sendEmailValidation();

          // send welcome email
          await new Email(newUser,`${req.protocol}://${req.get('host')}/products`).sendWelcome(); // prettier-ignore

          res.status(201).json({
               status: 'success',
               user: newUser,
          });
     } catch (err) {
          // return next(new AppError(err.message, 400));
          return next(err);
     }
};

module.exports = { signup };
