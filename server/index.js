const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const serverless = require('serverless-http');
require('dotenv').config();

// Initialize app
const app = express();
const port = process.env.PORT || 3000;

// Configuration
app.use(bodyParser.json({ type: 'application/json' }));

// Constants
const id = process.env.GITHUB_CLIENT_ID;
const secret = process.env.GITHUB_CLIENT_SECRET;
const params = `?client_id=${id}&client_secret=${secret}`



// Route(s)
app.post('/profile', (req, res) => {
  const { username } = req.body;
  const endpoint = `https://api.github.com/users/${username}${params}`;

  axios({
    method: 'get',
    url: endpoint,
  })
    .then(response => {
      res.status(200)
      res.send(response.data)
    })
    .catch(error => {
      console.log('Error with Axios profile res: ', error)
      res.send({ error })
    })

  return
})

app.post('/repos', (req, res) => {
  const { username } = req.body;
  const endpoint = `https://api.github.com/users/${username}/repos${params}&per_page=100`;

  axios({
    method: 'get',
    url: endpoint,
  })
    .then(response => {
      res.status(200)
      res.send(response.data)
    })
    .catch(error => {
      console.log('Error with Axios repos res: ', error)
      res.send({ error })
    })

  return
})



// DJ, spin that shit:
app.listen(port, () => console.log(`App is running on port ${port}`));

process.on('SIGINT', () => {
  console.log(`Process on port ${port} successfully terminated.`);
  
  process.exit();
})

// Serverless
// app.use('/.netlify/functions/index', router);
module.exports.handler = serverless(app);