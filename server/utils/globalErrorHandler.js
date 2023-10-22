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

const globalErrorHandler = (err, req, res, next) => {
     if (process.env.NODE_ENV === 'development') {
          res.json({
               message: err.message,
               err,
          });
     }

     if (process.env.NODE_ENV === 'production') {
          // DUPLICATE DATABASE FIELDS
          if (err.code === 11000) return handleDuplicateDBErr(err, res);

          // VALIDATION ERROR
          if (err.name === 'ValidationError')
               return handleValidationErr(err, res);

          res.status(500).json({ err: err.message });
     }
};

module.exports = globalErrorHandler;
