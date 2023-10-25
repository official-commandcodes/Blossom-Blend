const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { AppError } = require('../utils/appError');

// Add To Cart
const addToCart = async (req, res, next) => {
     try {
          const cart = {
               id: req.body.id,
               quantity: req.body.quantity,
          };

          const user = await User.findOneAndUpdate(
               req.user._id, // user id
               {
                    $push: { carts: cart }, // pushes object into an array
               },
               { new: true } // return new document
          );

          res.status(200).json({
               status: 'success',
               user,
          });
     } catch (err) {
          next(new AppError(err.message, 400));
     }
};

// Remove From Cart
const removeFromCart = async (req, res, next) => {
     try {
          await User.findOneAndUpdate(req.user._id, {
               $pull: { carts: { id: req.body.id } },
          });

          res.status(200).json({
               status: 'success',
          });
     } catch (err) {
          next(new AppError(err.message, 400));
     }
};

// Add To Cart
const addToWishlist = async (req, res, next) => {
     try {
          const user = await User.findOneAndUpdate(
               req.user._id, // user id
               {
                    $push: { wishlists: req.body.id }, // pushes to an array
               },
               { new: true } // return new document
          );

          res.status(200).json({
               status: 'success',
               user,
          });
     } catch (err) {
          next(new AppError(err.message, 400));
     }
};

// Remove From Cart
const removeFromWishlist = async (req, res, next) => {
     try {
          const user = await User.findOneAndUpdate(
               req.user._id, // user id
               { $pull: { wishlists: req.body.id } },
               { new: true } // return new document
          );

          res.status(200).json({
               status: 'success',
               user,
          });
     } catch (err) {
          next(new AppError(err.message, 400));
     }
};

// UPDATE CART ITEMS
const updateCart = async (req, res, next) => {
     try {
          const user = await User.findOneAndUpdate(
               {
                    _id: req.user._id,
                    carts: { $elemMatch: { id: { $eq: req.body.id } } },
               },
               { $set: { 'carts.$.quantity': req.body.quantity } },
               { new: true }
          );

          res.status(200).json({
               status: 'success',
               user,
          });
     } catch (err) {
          next(err);
     }
};

module.exports = {
     addToCart,
     removeFromCart,
     addToWishlist,
     removeFromWishlist,
     updateCart,
};
