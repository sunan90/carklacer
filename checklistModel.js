const db = require('../config/db');
const db = require('./db');

exports.getAll = (callback) => {
    const query = 'SELECT * FROM checklists';
    db.query(query, callback);
};


const Checklist = {
  getAll: (callback) => {
    const sql = 'SELECT * FROM checklist';
    db.query(sql, callback);
  },

  getByUsername: (username, callback) => {
    const sql = 'SELECT * FROM checklist WHERE nama = ?';
    db.query(sql, [username], callback);
  },

  addChecklist: (data, callback) => {
    const sql = 'INSERT INTO checklist SET ?';
    db.query(sql, data, callback);
  },

  updateChecklist: (id, data, callback) => {
    const sql = 'UPDATE checklist SET ? WHERE id = ?';
    db.query(sql, [data, id], callback);
  },

  deleteChecklist: (id, callback) => {
    const sql = 'DELETE FROM checklist WHERE id = ?';
    db.query(sql, [id], callback);
  }
};

module.exports = Checklist;
