class AppError {
     constructor(message, statusCode) {
          this.message = message;
          this.statusCode = statusCode;
          this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
     }
}

module.exports = { AppError };
