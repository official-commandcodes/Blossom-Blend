const mongoose = require('mongoose');

const cartSchema = mongoose.Schema(
     {
          userId: {
               type: mongoose.Schema.ObjectId,
               ref: 'User',
               required: [true, 'A cart must have a user'],
          },

          // populate for product id
          productId: {
               type: mongoose.Schema.ObjectId,
               ref: 'Product',
               required: [true, 'A cart must have a product'],
          },
     },
     { timestamps: true }
);

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
