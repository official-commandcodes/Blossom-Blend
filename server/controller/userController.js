const multer = require('multer');
const User = require('../models/user');
const Product = require('../models/product');
const { AppError } = require('../utils/appError');

const multerStorage = multer.diskStorage({
     destination: (req, file, cb) => {
          cb(null, `${__dirname}/../public/users`);
     },
     filename: (req, file, cb) => {
          const ext = file.originalname.split('.').at(-1);
          cb(null, `user-${Date.now()}.${ext}`);
     },
});

const multerFilter = (req, file, cb) => {
     if (file.mimetype.startsWith('image')) {
          cb(null, true);
     } else {
          cb('File requested must be an image', false);
     }
};

const upload = multer({
     storage: multerStorage,
     fileFilter: multerFilter,
});

const updateUserImage = upload.single('file');

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

// Total Amount
const totalAmount = async (req, res, next) => {
     try {
          const amounts = await Promise.all(
               req.body.map(async (item) => {
                    const product = await Product.findById(item.id);

                    return {
                         amount: product.price * item.quantity,
                    };
               })
          );

          res.status(200).json({
               status: 'success',
               amounts,
          });
     } catch (err) {
          next(err);
     }
};

// updateUserData
const updateUserData = async (req, res, next) => {
     try {
          const data = {
               ...req.body,
               photo: req.body.file || req.file.filename,
          };

          await User.findByIdAndUpdate(req.user._id, data, {
               runValidators: true,
          });

          res.status(200).json({
               status: 'User updated successfully',
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
     totalAmount,
     updateUserData,
     updateUserImage,
};
