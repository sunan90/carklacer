const express = require('express');
const router = express.Router();
const checklistController = require('./checklistController');
const { verifyToken, verifyAdmin } = require('./authMiddleware');

router.get('/', checklistController.getAllChecklist);
router.get('/rekap', checklistController.getRekapData);
router.get('/admin/all', checklistController.getAllChecklistsAdmin);
router.post('/', checklistController.addChecklist);
router.put('/:id', checklistController.updateChecklist);
router.delete('/:id', checklistController.deleteChecklist);

// Route untuk admin lihat semua checklist
router.get('/admin/rekap', verifyToken, verifyAdmin, checklistController.getRekapData);
router.get('/admin/checklists', verifyToken, verifyAdmin, checklistController.getAllChecklistsAdmin);

module.exports = router;
