// auth-service/index.js
const express = require('express');
const app = express();
const port = process.env.AUTH_PORT || 3000;

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'user' && password === 'password') {
    res.status(200).json({ message: 'Login successful', token: 'abc123' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Auth service listening at http://localhost:${port}`);
});
