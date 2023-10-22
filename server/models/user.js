const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');

const UserSchema = new mongoose.Schema(
     {
          name: {
               type: String,
               trim: true,
               required: [true, 'A user must have name'],
          },

          email: {
               type: String,
               unique: true,
               trim: true,
               required: [true, 'Please provide your email'],
               validate: {
                    validator: (val) => {
                         return isEmail(val);
                    },

                    message: 'Provide valid email address!',
               },
          },

          emailValid: {
               type: Boolean,
               default: false,
          },

          emailValidation: String,

          address: String,

          phoneNumber: Number,

          wishlist: [
               {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
               },
          ],

          cart: [
               {
                    type: mongoose.Schema.ObjectId,
                    ref: 'Product',
               },
          ],

          password: {
               type: String,
               minLength: [
                    8,
                    'Password length must be greater than or equal 8',
               ],
               required: [true, 'A user must have a password'],
               select: false,
          },

          passwordConfirm: {
               type: String,
               minLength: [
                    8,
                    'Password length must be greater than or equal 8',
               ],

               validate: {
                    validator: function (val) {
                         return this.password === val;
                    },
                    message: 'password & passwordConfirm must be the same',
               },
          },
     },
     { timestamps: true }
);

UserSchema.pre('save', async function (next) {
     if (!this.password) return next();

     this.password = await bcrypt.hash(this.password, +process.env.HASH_ROUNDS);

     this.passwordConfirm = undefined;

     next();
});

UserSchema.methods.createEmailToken = async function () {
     const emailToken = crypto.randomBytes(32).toString('hex');

     const hash = crypto.createHash('sha256').update(emailToken).digest('hex');

     this.emailValidation = await bcrypt.hash(hash, 12);

     console.log(this.emailValidation);
     return hash;
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
