const router = require('express').Router();
const {
     getAllProducts,
     createProduct,
     getProduct,
     getSearch,
     getProductById,
} = require('../controller/productController');

router.get('/search', getSearch);
router
     .get('/', getAllProducts)
     .get('/product', getProduct) // get a product by query
     .get('/:id', getProductById)
     .post('/', createProduct);

module.exports = router;
