const router = require('express').Router();
const { protect } = require('../controller/authController');
const { getCheckoutSession } = require('../controller/paymentController');

router.post('/checkout-session', protect, getCheckoutSession);

module.exports = router;
