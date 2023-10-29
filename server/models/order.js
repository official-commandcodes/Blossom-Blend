const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
     {
          product: {
               type: mongoose.Schema.ObjectId,
               ref: 'Product',
               required: [true, 'An Order must have a product'],
          },

          user: {
               type: mongoose.Schema.ObjectId,
               ref: 'User',
               required: [true, 'An Order must have a user'],
          },

          price: {
               type: Number,
               required: [true, 'An Order must have a price'],
          },

          data: String,

          paid: {
               type: Boolean,
               default: true,
          },
     },
     { timestamps: true }
);

orderSchema.pre(/^find/, function (next) {
     this.populate('product').populate('user');

     next();
});

const Order = new mongoose.model('Order', orderSchema);

module.exports = Order;
