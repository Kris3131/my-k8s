// chat-service/index.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.CHAT_PORT || 3001;

app.use(express.json());

app.post('/send-message', async (req, res) => {
  const { token, message } = req.body;

  try {
    const response = await axios.post(
      `http://auth-service:${process.env.AUTH_PORT || 3000}/validate-token`,
      { token }
    );

    if (response.data.valid) {
      res.status(200).json({ message: 'Message sent' });
    } else {
      res.status(401).json({ message: 'Invalid token' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Auth service error' });
  }
});

app.listen(port, () => {
  console.log(`Chat service listening at http://localhost:${port}`);
});
