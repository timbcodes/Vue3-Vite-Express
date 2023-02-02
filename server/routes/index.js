var express = require('express');
var router = express.Router();
const corsPolicy = require('../middleware/CORS/cors');

/* Use the CORS middleware */
router.use(corsPolicy.corsMiddleware());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Backend is working!");
});

module.exports = router;
