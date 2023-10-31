const Review = require('../models/review');
const User = require('../models/user');

const getAllReview = async (req, res, next) => {
     try {
          const reviews = await Review.find({})
               .populate('product')
               .populate('user');

          res.status(200).json({
               status: 'success',
               reviews,
          });
     } catch (err) {
          next(err);
     }
};

const createReview = async (req, res, next) => {
     try {
          const newReview = await Review.create(req.body);
          await User.findByIdAndUpdate(req.user._id, {
               $pull: { writeReview: req.body.product },
          });

          res.status(201).json({
               status: 'success',
               data: newReview,
          });
     } catch (err) {
          next(err);
     }
};

module.exports = { getAllReview, createReview };
