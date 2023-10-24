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
     .get('/:slug', getProduct)
     .post('/', createProduct);

module.exports = router;
