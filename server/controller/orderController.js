const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Product = require('../models/product');
const User = require('../models/user');

const getCheckoutSession = async (req, res, next) => {
     try {
          // compiled all the data in an array
          const lineItems = await Promise.all(
               req.body.map(async (item) => {
                    const product = await Product.findById(item.id);

                    return {
                         price_data: {
                              unit_amount: product.price * item.quantity * 100,
                              currency: 'usd',
                              product_data: {
                                   productId: product._id,
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
               cancel_url:
                    process.env.NODE_ENV === 'production'
                         ? 'https://blossom-blend.vercel.app/products'
                         : `http://localhost:5173/products`,
               customer_email: req.user.email,
               client_reference_id: `ref_id_${Date.now()}`,
               line_items: lineItems,
               metadata: {
                    ids: req.body,
               },
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

const createOrderCheckout = async (session) => {
     // save order(s) in the database
     const userEmail = session.customer_email;
     const user = await User.findOne({ email: userEmail });

     await Promise.all(
          session.display_items.map(async (item, i) => {
               await Product.create({
                    product: item.custom.productId,
                    user: user._id,
                    price: item.unit_amount,
               });
          })
     );

     // save products id on user writeReview field for review writing
     await Promise.all(
          session.line_items.map(async (item) => {
               await User.updateOne(
                    { _id: user._id },
                    { $push: { writeReview: item.id }, $set: { carts: [] } }
               );
          })
     );
};

const webhookCheckout = (req, res) => {
     const sig = request.headers['stripe-signature'];

     let event;

     try {
          event = stripe.webhooks.constructEvent(
               req.body,
               sig,
               process.env.STRIPE_WEBHOOK_SECRET
          );
     } catch (err) {
          response.status(400).send(`Webhook Error: ${err.message}`);
          return;
     }

     if (event.type === 'checkout.session.completed') {
          createOrderCheckout(event.data.object);

          res.status(200).json({
               status: 'success',
          });
     }
};

module.exports = { getCheckoutSession, webhookCheckout };
