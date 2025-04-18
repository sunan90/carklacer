const express = require('express');
const router = express.Router();
const checklistController = require('../controllers/checklistController');

router.get('/', checklistController.getAllChecklist);
router.get('/rekap', checklistController.getRekapData);
router.post('/', checklistController.addChecklist);
router.put('/:id', checklistController.updateChecklist);
router.delete('/:id', checklistController.deleteChecklist);

module.exports = router;
