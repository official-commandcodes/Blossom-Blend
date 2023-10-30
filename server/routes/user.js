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

router.use(protect);

router
     .get('/getUser', getLoggedInUser)
     .post('/totalAmount', totalAmount)
     .patch('/updateData', updateUserImage, updateUserData)
     .patch('/carts/addToCarts', addToCart)
     .patch('/carts/updateCartItems', updateCart)
     .patch('/wishlists/addToWishlists', addToWishlist)
     .delete('/carts/removeFromCarts', removeFromCart)
     .delete('/wishlists/removeFromWishlists', removeFromWishlist);

module.exports = router;
