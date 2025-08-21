const express = require('express');
const router = express.Router();
const pointsController = require('../controllers/pointController');

router.get('/', pointsController.getAllPoints);
router.post('/', pointsController.createPoint);

module.exports = router;