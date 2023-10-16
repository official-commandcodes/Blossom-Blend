const express = require('express');
const app = express();

app.get('/', (req, res) => {
     res.send(`You are on ${req.originalUrl}`);
});

module.exports = app;
