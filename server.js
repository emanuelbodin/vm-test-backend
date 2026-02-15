const express = require('express');

const app = express();
const PORT = 3000;

// Route that sends back random data
app.get('/api/data', (req, res) => {
  const randomData = {
    id: Math.floor(Math.random() * 1000),
    value: Math.random().toFixed(2),
    timestamp: new Date().toISOString(),
    message: 'Random data generated'
  };

  res.json(randomData);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Try: http://localhost:${PORT}/api/data`);
});
