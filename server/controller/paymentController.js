const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Product = require('../models/product');

const getCheckoutSession = async (req, res, next) => {
     try {
          // compiled all the data in an array
          const items = await Promise.all(
               req.body.map(async (item) => {
                    const product = await Product.findById(item.id);

                    return {
                         price_data: {
                              unit_amount: product.price * item.quantity,
                              currency: 'usd',
                              product_data: {
                                   name: `${product.title} Product`,
                                   images: [
                                        `https://blossomblendapi.onrender.com/products/${product.imageUrl}`,
                                   ],
                                   description: product.description,
                              },
                         },
                         quantity: item.quantity,
                    };
               })
          );

          // Create session
          const session = await stripe.checkout.sessions.create({
               payment_method_types: ['card'],
               success_url:
                    process.env.NODE_ENV === 'production'
                         ? 'https://blossom-blend.vercel.app'
                         : 'http://localhost:5173',
               cancel_url: `http://localhost:5173/products`,
               customer_email: req.user.email,
               client_reference_id: `ref_id_${Date.now()}`,
               line_items: items,
               mode: 'payment',
          });

          res.status(200).json({
               status: 'success',
               session,
          });
     } catch (err) {
          next(err);
     }
};

module.exports = { getCheckoutSession };
