const express = require("express");
const router = express.Router();

// const { checkToken } = require('../utils/middlewares');
// checkToken en la 7

router.use('/autores', require('./api/apiAutoresRoutes'));
router.use('/posts', require('./api/apiPostsRoutes'));

module.exports = router; 