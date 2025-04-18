const Checklist = require('../models/checklistModel');

exports.getAllChecklist = (req, res) => {
  const username = req.user && req.user.username;
  if (!username) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const sql = 'SELECT * FROM checklist WHERE nama = ?';
  Checklist.getByUsername(username, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

exports.addChecklist = (req, res) => {
  const data = req.body;
  Checklist.addChecklist(data, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Checklist added!', id: result.insertId });
  });
};

exports.updateChecklist = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Checklist.updateChecklist(id, data, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Checklist updated!' });
  });
};

exports.deleteChecklist = (req, res) => {
  const id = req.params.id;
  Checklist.deleteChecklist(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Checklist deleted!' });
  });
};
