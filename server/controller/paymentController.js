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

// The library needs to be configured with your account's secret key.
// Ensure the key is kept out of any version control system you might be using.
// const stripe = require('stripe')('sk_test_...');
// const express = require('express');
// const app = express();

// // This is your Stripe CLI webhook secret for testing your endpoint locally.
// const endpointSecret =
//      'whsec_7ffcdb36d7f807dc7a9150bf3fbc1290de51224b1ddaa1056c9f4d76f9b6ba24';

// app.post(
//      '/webhook',
//      express.raw({ type: 'application/json' }),
//      (request, response) => {
//           const sig = request.headers['stripe-signature'];

//           let event;

//           try {
//                event = stripe.webhooks.constructEvent(
//                     request.body,
//                     sig,
//                     endpointSecret
//                );
//           } catch (err) {
//                response.status(400).send(`Webhook Error: ${err.message}`);
//                return;
//           }

//           // Handle the event
//           switch (event.type) {
//                case 'checkout.session.completed':
//                     const checkoutSessionCompleted = event.data.object;
//                     // Then define and call a function to handle the event checkout.session.completed
//                     break;
//                // ... handle other event types
//                default:
//                     console.log(`Unhandled event type ${event.type}`);
//           }

//           // Return a 200 response to acknowledge receipt of the event
//           response.send();
//      }
// );

module.exports = { getCheckoutSession };
