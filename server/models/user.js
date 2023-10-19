const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
     {
          username: String,
          email: String,
          wishlist: [
               {
                    product: {
                         type: mongoose.Schema.Types.ObjectId,
                         ref: 'Product',
                    },
                    quantity: Number,
               },
          ],
     },
     { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
