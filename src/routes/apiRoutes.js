const router = require('express').Router();

// const { checkToken } = require('../utils/middlewares');

router.use('/autores', require('./api/apiAutoresRoutes'));
router.use('/posts', require('./api/apiPostsRoutes'));

module.exports = router; 