const jwt = require('jsonwebtoken');
const pegawaiChecklist = require('../../public/js/data').pegawaiChecklist || require('../../public/js/data.js').pegawaiChecklist;

const SECRET_KEY = 'your_secret_key'; // Use env variable in production

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  // Check if username exists in pegawaiChecklist
  const userExists = pegawaiChecklist.some(p => p.nama === username);

  if (!userExists || password !== '123') {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  // Generate JWT token
  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });

  res.json({ token });
};
