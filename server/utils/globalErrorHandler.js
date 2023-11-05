// DUPLICATE
const handleDuplicateDBErr = (err, res) => {
     const message = Object.values(err.keyValue)
          .map((el) => `'${el}' already exist in the database`)
          .join(',');

     res.status(409).json({ status: 'fail', message });
};

// DUPLICATE
const handleValidationErr = (err, res) => {
     const message = Object.values(err.errors)
          .map(({ message, path }) => `${path}: ${message}`)
          .join(', ');

     res.status(409).json({ status: 'fail', message });
};

const handleJWTExpiredError = (err, res) => {
     res.status(400).json({
          status: 'fail',
          message: 'Your token has expired',
     });
};

const handleJWTMalformed = (err, res) => {
     return res.status(400).json({
          status: 'fail',
          message: 'invalid token',
     });
};

const globalErrorHandler = (err, req, res, next) => {
     if (process.env.NODE_ENV === 'development') {
          res.json({
               message: err.message,
               err: { ...err },
          });
     }

     if (process.env.NODE_ENV === 'production') {
          // DUPLICATE DATABASE FIELDS
          if (err.code === 11000) return handleDuplicateDBErr(err, res);

          // VALIDATION ERROR
          if (err.name === 'ValidationError')
               return handleValidationErr(err, res);

          // Invalid Token
          if (err.name == 'TokenExpiredError')
               return handleJWTExpiredError(err, res);

          // JsonWebTokenError
          if (err.message === 'JsonWebTokenError')
               return handleJWTMalformed(err, res);

          res.status(err.statusCode || 500).json({ err });
     }
};

module.exports = globalErrorHandler;
