require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to MyHalalTrip Chatbot API! Use the /chat endpoint to interact with the chatbot.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.get('/api/data', (req, res) => {
    // Here, you would fetch data from a database or another API,
    // but for this example, let's just return a simple message.
    res.json({ message: "This is your API data" });
  });
  


  const axios = require('axios');
  app.get('/api/data', async (req, res) => {
    try {
      const response = await axios.get('https://externalapi.com/data', {
        headers: { 'Authorization': `Bearer ${process.env.API_KEY}` }
      });
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  });
  
