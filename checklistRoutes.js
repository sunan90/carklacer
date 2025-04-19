const express = require('express');
const router = express.Router();
const checklistController = require('./checklistController');

router.get('/', checklistController.getAllChecklist);
router.get('/rekap', checklistController.getRekapData);
router.get('/admin/all', checklistController.getAllChecklistsAdmin);
router.post('/', checklistController.addChecklist);
router.put('/:id', checklistController.updateChecklist);
router.delete('/:id', checklistController.deleteChecklist);

module.exports = router;
