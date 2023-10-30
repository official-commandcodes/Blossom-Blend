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
     totalAmount,
     updateUserData,
     updateUserImage,
} = require('../controller/userController');

// AUTH
router.post('/signup', signup).post('/login', login);

// PROTECT UER ID TO BE USED
router.patch('/validate/:userId/:emailValidateToken', validateEmail);

router
     .get('/getUser', protect, getLoggedInUser)
     .post('/totalAmount', protect, totalAmount)
     .patch('/updateData', protect, updateUserImage, updateUserData)
     .patch('/carts/addToCarts', protect, addToCart)
     .patch('/carts/updateCartItems', protect, updateCart)
     .patch('/wishlists/addToWishlists', protect, addToWishlist)
     .delete('/carts/removeFromCarts', protect, removeFromCart)
     .delete('/wishlists/removeFromWishlists', protect, removeFromWishlist);

module.exports = router;
