const router = require('express').Router();
const {
     getAllProducts,
     createProduct,
     getProduct,
     getPopular,
} = require('../controller/productController');

router.get('/', getAllProducts).post('/', createProduct);

router.get('/:id', getProduct);

module.exports = router;
