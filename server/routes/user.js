const router = require('express').Router();
const { signup, login, validateEmail } = require('../controller/authController'); // prettier-ignore

// PROTECT UER ID TO BE USED
router.patch('/validate/:userId/:emailValidateToken', validateEmail);

// AUTH
router.post('/signup', signup).post('/login', login);

module.exports = router;
