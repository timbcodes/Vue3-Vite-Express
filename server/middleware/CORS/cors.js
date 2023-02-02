const cors = require('cors');

const corsPolicy = {
  whitelist: [
    // Place your whitelisted domains here
  ],
  corsMiddleware() {
    corsOptions = {
      // You'll need to change these options to meet your needs
      origin: true,
      credentials: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: true,
      optionsSuccessStatus: 205,
    }
    return cors(corsOptions);
  },
};

module.exports = corsPolicy;