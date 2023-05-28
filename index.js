// Description: This file is the main entry point for the application.
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// middlewares
app.use(cors());
app.use(express.json());

// data files
const categories = require('./data/categories.json');
const news = require('./data/news.json');

// get home page
app.get('/', (req, res) => {
  res.send('Hello Dragon!')
})

// get all news
app.get('/news', (req, res) => {
  res.send(news)
})
// get news by id
app.get('/news/:id', (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find(item => item._id === id);
  res.send(selectedNews)
})
// get news by category
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

// get all categories
app.get('/categories', (req, res) => {
  res.send(categories)
})

// app is listening on port
app.listen(port, () => {
  console.log(`Dragon app listening on port ${port}`)
})