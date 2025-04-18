const express = require('express');
const cors = require('cors');
const checklistRoutes = require('./routes/checklistRoutes');
const authRoutes = require('./routes/authRoutes');
const authenticateToken = require('./middleware/authMiddleware');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static files from public folder
app.use(express.static('public'));

// Auth routes
app.use('/api/auth', authRoutes);

// Protect checklist routes with authentication middleware
app.use('/api/checklist', authenticateToken, checklistRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
