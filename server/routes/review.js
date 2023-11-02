const router = require('express').Router();
const { getReview, createReview } = require('../controller/reviewController');
const { protect } = require('../controller/authController');

router.post('/', protect, createReview);

router.get('/:id', protect, getReview);
// router.get('/:id', getAllReview);

module.exports = router;
