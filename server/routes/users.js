var express = require('express');
var router = express.Router();
const corsPolicy = require('../middleware/CORS/cors');

/* Use the CORS middleware */
router.use(corsPolicy.corsMiddleware());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
