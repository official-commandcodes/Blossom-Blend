const { signup } = require('../controller/authController');

const router = require('express').Router();

router.post('/', signup);

module.exports = router;
