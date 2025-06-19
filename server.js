const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Default static folder for React
const clientBuildPath = path.join(__dirname, 'client', 'build');
app.use(express.static(clientBuildPath));

// API route
app.get('/api/date', (req, res) => {
  res.json({ date: new Date().toString() });
});

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
