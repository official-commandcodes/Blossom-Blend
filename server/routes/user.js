const router = require('express').Router();
const {
     signup,
     login,
     validateEmail,
     getLoggedInUser,
     protect,
} = require('../controller/authController');
const {
     addToCart,
     removeFromCart,
     addToWishlist,
     removeFromWishlist,
     updateCart,
} = require('../controller/userController');

// AUTH
router.post('/signup', signup).post('/login', login);

// PROTECT UER ID TO BE USED
router.patch('/validate/:userId/:emailValidateToken', validateEmail);

router
     .get('/getUser', getLoggedInUser)
     .patch('/carts/addToCarts', protect, addToCart)
     .patch('/carts/updateCartItems', protect, updateCart)
     .patch('/wishlists/addToWishlists', protect, addToWishlist)
     .delete('/carts/removeFromCarts', protect, removeFromCart)
     .delete('/wishlists/removeFromWishlists', protect, removeFromWishlist);

module.exports = router;
