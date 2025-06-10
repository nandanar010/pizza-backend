const express = require('express');
const app = express();

app.get('/api/auth/test', (req, res) => {
  res.send('Auth route is working!');
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
