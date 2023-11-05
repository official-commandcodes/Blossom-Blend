require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

// CONNECT TO MONGODB DATABASE
mongoose.connect(process.env.MONGODB_URL);

console.log(process.env.NODE_ENV);

const PORT = process.env.PORT || 9999;

const server = app.listen(PORT, () => {
     console.log(`Server is listening on ${PORT}`);
});

process.on('unhandledRejection', () => {
     server.exit();
});

process.on('unhandledException', () => {
     server.exit();
});
