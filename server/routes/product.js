const router = require('express').Router();
const {
     getAllProducts,
     createProduct,
     getProduct,
     getSearch,
     getProductById,
} = require('../controller/productController');
// const { protect } = require('../middleware/auth');

router.get('/search', getSearch);
router
     .get('/', getAllProducts)
     .get('/product', getProduct) // get a product by query
     .get('/:id', getProductById)
     .post('/', createProduct);

module.exports = router;
