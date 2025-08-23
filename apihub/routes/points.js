;const express = require('express');
const router = express.Router();
const pointsController = require('../controllers/pointController');

router.get('/', pointsController.getAllPoints);
router.post('/', pointsController.createPoint);
router.get('/:id', pointsController.getPointById);
router.put('/:id', pointsController.updatePoint);
router.delete('/:id', pointsController.deletePoint)


module.exports = router;