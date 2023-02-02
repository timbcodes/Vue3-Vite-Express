const mysql = require('mysql2/promise');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const session_middleware = {
  sessionMiddleware() {
    const options = {
      // You'll need to change these options to meet your needs
      // host: process.env.DB_HOST,
      // port: process.env.DB_PORT,
      // user: process.env.DB_USER,
      // password: process.env.DB_PASS,
      // database: process.env.DB_NAME,
    };
    const connection = mysql.createPool(options);
    const sessionStore = new MySQLStore({}, connection);
    return session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      store: sessionStore,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 1 year
        sameSite: 'none',
        secure: true,
        httpOnly: false,
      },
    });
  },
};

module.exports = session_middleware;
