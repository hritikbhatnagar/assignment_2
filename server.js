// app.js
const express = require('express');
const cors=require("cors");
const app = express();
const port = 8080; 

app.use(cors());

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Web App!</h1>');
});


app.get('/about', (req, res) => {
  res.send('<h1>About My Web App</h1>');
});


app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
