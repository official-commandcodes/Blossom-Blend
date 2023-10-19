const Product = require('../models/product');
// const subDays = require('date-fns/subDays');

const queryHelper = (options, query, engine, value) => {
     const check = options.includes(value);

     if (check) {
          if (value === 'all') {
               return query.find();
          } else {
               return query.find({ [engine]: value });
          }
     }

     if (!check)
          throw new Error(`Products categories does not include "${value}"`);
};

const getAllProducts = async (req, res, next) => {
     try {
          let query = Product.find();

          // category
          if (req.query.category) {
               query = queryHelper(
                    ['all', 'skincare', 'makeup', 'fragrance', 'body'],
                    query,
                    'category',
                    req.query.category
               );
          }

          // sorting
          if (req.query.sort) {
               if (req.query.sort === 'all') {
                    query = query;
               }

               if (req.query.sort === 'high-price') {
                    query = query.find({ price: { $gte: 10000 } });
               }

               if (req.query.sort === 'low-price') {
                    query = query.find({ price: { $lt: 10000 } });
               }
          }

          const products = await query.sort('-createdAt');

          res.status(200).json({
               status: 'success',
               results: products.length,
               data: products,
          });
     } catch (err) {
          next(err);
     }
};

const getProduct = async (req, res, next) => {
     try {
          const product = await Product.findById(req.params.id);

          res.status(200).json({
               status: 'success',
               data: product,
          });
     } catch (err) {
          next(err);
     }
};

const createProduct = async (req, res, next) => {
     try {
          const newProduct = await Product.create(req.body);

          res.status(201).json({
               status: 'success',
               data: newProduct,
          });
     } catch (err) {
          next(err);
     }
};

module.exports = { getAllProducts, createProduct, getProduct };
