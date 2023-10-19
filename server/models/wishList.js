const mongoose = require('mongoose');

const wishListSchema = mongoose.Schema(
     {
          title: {
               type: String,
               required: [true, 'A wishlist must have a title'],
          },

          userId: {
               type: mongoose.Schema.ObjectId,
               ref: 'User',
               required: [true, 'A wishlist must have a user'],
          },

          wishlists: [String],
     },
     { timestamps: true, toJSON: { virtual: true } }
);

const WishList = mongoose.model('WishList', wishListSchema);

module.exports = WishList;
