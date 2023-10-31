const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { isFriday, isTuesday } = require('date-fns');
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
                              unit_amount:
                                   isFriday(new Date()) || isTuesday(new Date())
                                        ? product.discountPrice
                                        : product.price,
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
               client_reference_id: `${req.body
                    .map((item) => item.id)
                    .join('_')}`,
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
          const data = event.data.object;

          const items = await stripe.checkout.sessions.listLineItems(data.id);
          const user = await User.findOne({ email: data.customer_email });

          await Promise.all(
               items.data.map(async (item, i) => {
                    await Order.create({
                         product: data.client_reference_id.split('_')[i],
                         user: user._id,
                         price: item.amount_subtotal,
                         quantity: item.quantity,
                    });
               })
          );

          // save products id on user writeReview field for review writing
          await Promise.all(
               items.data.map(async (_, i) => {
                    await User.updateOne(
                         { _id: user._id },
                         {
                              $push: {
                                   writeReview:
                                        data.client_reference_id.split('_')[i],
                              },
                              $set: { carts: [] },
                         }
                    );
               })
          );
     }

     res.status(200).json({ received: true });
};

const getAllOrders = async (req, res, next) => {
     try {
          const orders = await Order.find({ user: req.user._id });

          res.status(200).json({
               status: 'success',
               results: orders.length,
               data: orders,
          });
     } catch (err) {
          next(err);
     }
};

module.exports = { getCheckoutSession, webhookCheckout, getAllOrders };
