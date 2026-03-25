// Practical AI Application Development & Refinement — Entry point
// TODO: Build the core product logic

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ product: 'Practical AI Application Development & Refinement', status: 'pre-mvp' });
});

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Practical AI Application Development & Refinement running on port ${PORT}`);
});
