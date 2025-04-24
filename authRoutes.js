const express = require('express');
const router = express.Router();
const authController = require('./authController');
const checklistController = require('./checklistController');

router.post('/login', authController.login);
router.get('/rekap', checklistController.getRekapData); // Rute baru untuk admin

module.exports = router;
