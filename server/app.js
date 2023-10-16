const express = require('express');
const cors = require('cors');
const app = express();

// cross-origin
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
const data = [
     {
          id: 53,
          title: 'printed high quality T shirts',
          price: 35,
          quantity: 3,
          total: 105,
          discountPercentage: 7.54,
          discountedPrice: 97,
     },
     {
          id: 61,
          title: 'Leather Straps Wristwatch',
          price: 120,
          quantity: 2,
          total: 240,
          discountPercentage: 7.14,
          discountedPrice: 223,
     },
     {
          id: 92,
          title: 'HOT SALE IN EUROPE electric racing motorcycle',
          price: 920,
          quantity: 1,
          total: 920,
          discountPercentage: 14.4,
          discountedPrice: 788,
     },
     {
          id: 11,
          title: 'perfume Oil',
          price: 13,
          quantity: 3,
          total: 39,
          discountPercentage: 8.4,
          discountedPrice: 36,
     },
     {
          id: 37,
          title: 'ank Tops for Womens/Girls',
          price: 50,
          quantity: 3,
          total: 150,
          discountPercentage: 12.05,
          discountedPrice: 132,
     },
];

app.get('/', (req, res) => {
     res.json(data);
});

module.exports = app;
