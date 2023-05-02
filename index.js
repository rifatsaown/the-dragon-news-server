const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/news', (req, res) => {
  res.send(news)
})

app.get('/news/:id', (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find(item => item._id === id);
  res.send(selectedNews)
})

app.get('/category/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.send(news)
  }
  else {
    const categoryNews = news.filter(item => parseInt(item.category_id) === id);
    res.send(categoryNews)
  }
})

app.get('/categories', (req, res) => {
  res.send(categories)
})

app.listen(port, () => {
  console.log(`Dragon app listening on port ${port}`)
})