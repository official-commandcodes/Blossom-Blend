const Review = require('../models/review');
const User = require('../models/user');

const getReview = async (req, res, next) => {
     try {
          const review = await Review.find({
               product: req.params.id,
          });

          res.status(200).json({
               status: 'success',
               data: review,
          });
     } catch (err) {
          next(err);
     }
};

const createReview = async (req, res, next) => {
     try {
          const user = await User.findByIdAndUpdate(
               req.user._id,

               { $pull: { writeReview: { $in: [req.body.product] } } },

               { new: true, multi: true }
          );

          const newReview = await Review.create(req.body);

          res.status(201).json({
               status: 'success',
               data: newReview,
               user,
          });
     } catch (err) {
          next(err);
     }
};

module.exports = { getReview, createReview };
