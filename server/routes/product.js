const router = require('express').Router();
const {
     getAllProducts,
     createProduct,
     getProduct,
     getSearch,
} = require('../controller/productController');

router.get('/search', getSearch);
router.get('/', getAllProducts).post('/', createProduct);

router.get('/:slug', getProduct);

module.exports = router;
