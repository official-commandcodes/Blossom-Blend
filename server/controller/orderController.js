const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Product = require('../models/product');
const Order = require('../models/order');
const User = require('../models/user');

const getCheckoutSession = async (req, res, next) => {
     try {
          // compiled all the data in an array
          const lineItems = await Promise.all(
               req.body.map(async (item) => {
                    const product = await Product.findById(item.id);

                    return {
                         price_data: {
                              unit_amount: product.price,
                              currency: 'usd',
                              product_data: {
                                   name: `${product.title} Product`,
                                   images: [
                                        `https://blossomblendapi.onrender.com/products/${product.imageUrl}`,
                                   ],
                                   description: product.description,
                                   metadata: {
                                        productId: product._id,
                                   },
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
                         ? 'https://blossom-blend.vercel.app/products'
                         : 'http://localhost:5173',
               cancel_url:
                    process.env.NODE_ENV === 'production'
                         ? 'https://blossom-blend.vercel.app/carts'
                         : `http://localhost:5173/products`,
               customer_email: req.user.email,
               client_reference_id: `ref_id_${Date.now()}`,
               line_items: lineItems,
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

const webhookCheckout = async (req, res) => {
     const sig = req.headers['stripe-signature'];

     let event;

     try {
          event = stripe.webhooks.constructEvent(
               req.body,
               sig,
               process.env.STRIPE_WEBHOOK_SECRET
          );
     } catch (err) {
          return res.status(400).send(`Webhook Error: ${err.message}`);
     }

     if (event.type === 'checkout.session.completed') {
          const session = await stripe.checkout.sessions.listLineItems(
               event.data.object.id
          );

          const userEmail = session.customer_email;
          const user = await User.findOne({ email: userEmail });

          await Order.create({
               product: '652e60085c6f325c01edad1f',
               user: user._id,
               price: 4000,
          });

          // save order(s) in the database
          // const userEmail = session.customer_email;
          // const user = await User.findOne({ email: userEmail });

          // await Promise.all(
          //      session.data.map(async (item) => {
          //           await Order.create({
          //                product: item.productId,
          //                user: user._id,
          //                price: session.amount_total,
          //           });
          //      })
          // );

          // // save products id on user writeReview field for review writing
          // await Promise.all(
          //      session.display_items.map(async (item) => {
          //           await User.updateOne(
          //                { _id: user._id },
          //                { $push: { writeReview: item.id }, $set: { carts: [] } }
          //           );
          //      })
          // );
          res.status(200).json({ received: true });
     }
};

module.exports = { getCheckoutSession, webhookCheckout };
