const router = require('express').Router();
const {
     getAllReview,
     createReview,
} = require('../controller/reviewController');
const { protect } = require('../controller/authController');

router.get('/', protect, getAllReview).post('/', protect, createReview);
// router.get('/:id', getAllReview);

module.exports = router;
