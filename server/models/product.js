const mongoose = require('mongoose');
const slug = require('slug');

const productSchema = mongoose.Schema(
     {
          title: {
               type: String,
               required: [true, 'A product must have title'],
               trim: true,
               unique: true,
          },

          slug: String,

          description: {
               type: String,
               required: [true, 'A product must have description'],
          },

          price: {
               type: Number,
               required: [true, 'A product must have price'],
          },

          category: {
               type: String,
               required: [true, 'A product must have category'],
          },

          imageUrl: String,

          images: [String],

          wishLists: [String],

          stockQuantity: {
               type: Number,
               default: 0,
          },

          ratings: {
               type: [Number],
               validate: {
                    validator: function (arr) {
                         return arr.every((num) => num >= 1 && num <= 5);
                    },
                    message: 'Value must be between 1 and 5.',
               },
               default: [1],
          },

          discountPrice: {
               type: Number,
               validate: {
                    validator: function (val) {
                         return this.price > val;
                    },
                    message: 'Discount price cannot be greater than Original price',
               },
          },

          // Get discount Price by virtual
          // discountPercentage
          // discountPrice
     },
     {
          timestamps: true,
          toJSON: { virtuals: true },
          toObject: { virtuals: true },
          strictQuery: true,
     }
);

// CREATE SLUG ON PRE SAVE
productSchema.pre('save', function (next) {
     this.slug = slug(this.title, { lower: true });

     next();
});

// PRODUCT VIRTUALS
productSchema.virtual('avgRatings').get(function () {
     return (
          this.ratings.reduce((acc, cur) => acc + cur, 0) / this.ratings.length
     ).toFixed(1);
});

productSchema.virtual('discountPercentage').get(function () {
     return ((this.discountPrice / this.price) * 100).toFixed(0);
});

productSchema.virtual('priceAfterDiscount').get(function () {
     return this.price - this.discountPrice;
});

// productSchema.pre(/^find/, function (next) {
//      this.find({}).select('-discountPrice');

//      next();
// });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
