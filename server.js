// server.js
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/date', (req, res) => {
  res.json({ date: new Date().toString() });
});

// For any other routes, serve the React frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
