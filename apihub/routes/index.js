const express = require('express');
const router = express.Router();

const pointsRoutes = require('./points');
//const productsRoutes = require('./products'); 

router.use('/points', pointsRoutes);
//router.use('/products', productsRoutes);

module.exports = router;