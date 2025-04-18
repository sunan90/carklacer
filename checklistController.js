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

exports.getRekapData = (req, res) => {
  // Aggregate checklist completion percentages per user per week
  const sql = `
    SELECT nama,
      SUM(CASE WHEN WEEK(STR_TO_DATE(tanggal, '%Y-%m-%d')) = 1 AND status = 'done' THEN 1 ELSE 0 END) AS minggu1_done,
      SUM(CASE WHEN WEEK(STR_TO_DATE(tanggal, '%Y-%m-%d')) = 1 THEN 1 ELSE 0 END) AS minggu1_total,
      SUM(CASE WHEN WEEK(STR_TO_DATE(tanggal, '%Y-%m-%d')) = 2 AND status = 'done' THEN 1 ELSE 0 END) AS minggu2_done,
      SUM(CASE WHEN WEEK(STR_TO_DATE(tanggal, '%Y-%m-%d')) = 2 THEN 1 ELSE 0 END) AS minggu2_total,
      SUM(CASE WHEN WEEK(STR_TO_DATE(tanggal, '%Y-%m-%d')) = 3 AND status = 'done' THEN 1 ELSE 0 END) AS minggu3_done,
      SUM(CASE WHEN WEEK(STR_TO_DATE(tanggal, '%Y-%m-%d')) = 3 THEN 1 ELSE 0 END) AS minggu3_total,
      SUM(CASE WHEN WEEK(STR_TO_DATE(tanggal, '%Y-%m-%d')) = 4 AND status = 'done' THEN 1 ELSE 0 END) AS minggu4_done,
      SUM(CASE WHEN WEEK(STR_TO_DATE(tanggal, '%Y-%m-%d')) = 4 THEN 1 ELSE 0 END) AS minggu4_total
    FROM checklist
    GROUP BY nama
  `;

  Checklist.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });

    // Calculate percentages
    const recap = results.map(row => {
      const minggu = [];
      for (let i = 1; i <= 4; i++) {
        const done = row[`minggu${i}_done`];
        const total = row[`minggu${i}_total`];
        const percent = total ? Math.round((done / total) * 100) : 0;
        minggu.push(percent);
      }
      const totalPercent = Math.round(minggu.reduce((a, b) => a + b, 0) / 4);
      return {
        nama: row.nama,
        minggu,
        totalPercent
      };
    });

    res.json(recap);
  });
};
