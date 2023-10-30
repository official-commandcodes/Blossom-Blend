const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// ROUTES
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const orderRoutes = require('./routes/order');
const globalErrorHandler = require('./utils/globalErrorHandler');
const { webhookCheckout } = require('./controller/orderController');
const app = express();

// MIDDLEWARES
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.post(
     '/webhook',
     express.raw({ type: 'application/json' }),
     webhookCheckout
);

// CROSS-ORIGIN
const corsOptions = {
     origin:
          process.env.NODE_ENV === 'production'
               ? 'https://blossom-blend.vercel.app'
               : 'http://localhost:5173',
     methods: ['GET', 'POST', 'DELETE', 'PATCH'],
     optionSuccessStatus: 200,
     headers: ['Content-Type', 'Authorization', 'x-access-token'],
     credentials: true,
     maxAge: 3600,
     preflightContinue: false,
};
app.use(cors(corsOptions));
app.use(cookieParser());

// BODY-PARSER & STATIC FILES
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
// app.use((req, res, next) => {
//      res.setHeader(
//           'Access-Control-Allow-Origin',
//           'https://blossom-blend.vercel.app'
//      );
//      next();
// });

app.get('/', (req, res) => {
     res.send('Welcome to Bloom Blend API');
});

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/orders', orderRoutes);

app.all('*', (req, res) => {
     return res.send(`There is no ${req.originalUrl} route on this server`);
});

app.use(globalErrorHandler);

module.exports = app;
