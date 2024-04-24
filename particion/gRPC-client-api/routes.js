const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/sales', controller.sales);
router.get('/employees', controller.employees);

module.exports = router;
