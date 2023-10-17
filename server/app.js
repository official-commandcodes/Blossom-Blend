const express = require('express');
const cors = require('cors');

// ROUTES
const productRoutes = require('./routes/product');
const globalErrorHandler = require('./utils/globalErrorHandler');
const app = express();

// MIDDLEWARES

// CROSS-ORIGIN
const corsOptions = {
     origin: '*',
     methods: ['GET', 'POST', 'DELETE', 'PATCH'],
     optionSuccessStatus: 200,
     headers: ['Content-Type', 'Authorization', 'x-access-token'],
     credentials: true,
     maxAge: 3600,
     preflightContinue: false,
};
app.use(cors(corsOptions));

// BODY-PARSER & STATIC FILES
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
     res.send('Welcome to Bloom Blend API');
});

// app.use('/api/v1/users', userRoutes);
app.use('/api/v1/products', productRoutes);
// app.use('/api/v1/products', productRoutes);
// app.use('/api/v1/products', productRoutes);

app.all('*', (req, res) => {
     return res.send(`There is no ${req.originalUrl} route on this server`);
});

app.use(globalErrorHandler);

module.exports = app;
