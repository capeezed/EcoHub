const express = require('express');
const router = express.Router();

const pointsRoutes = require('./points');
const productsRoutes = require('./products')
const userRoutes = require('./user')

router.use('/points', pointsRoutes);
router.use('/products', productsRoutes)
router.use('/user', userRoutes)

module.exports = router;