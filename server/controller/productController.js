const Product = require('../models/product');

const getAllProducts = async (req, res, next) => {
     try {
          const products = await Product.find({});
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
