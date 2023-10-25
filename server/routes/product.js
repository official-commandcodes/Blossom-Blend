const router = require('express').Router();
const {
     getAllProducts,
     createProduct,
     getProduct,
     getSearch,
} = require('../controller/productController');

router.get('/search', getSearch);
router
     .get('/', getAllProducts)
     .get('/product', getProduct) // get a product by query
     .post('/', createProduct);

module.exports = router;
