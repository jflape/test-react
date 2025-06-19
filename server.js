const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve React Vite build
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Sample API
app.get('/api/date', (req, res) => {
  res.json({ date: new Date().toString() });
});

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
