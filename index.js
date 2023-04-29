const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const categories = require('./data/categories.json');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})