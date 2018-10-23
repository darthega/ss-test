const fs = require('fs-extra');
const path = require('path');

const Articles = require('./Articles');
const artHandler = new Articles();

const getAllArticles = (req, res) => {
  res.json(artHandler.getAll());
}

const getArticle = (req, res) => {
  const found = artHandler.getOne(req.params.id);

  if (found.length) {
    res.json(found);
  } else {
    res.statusCode = 404;
    res.end(Error('No results found'));
  }
}

const setArticle = (req, res) => {
  artHandler.set(req.body);
}

const updateArticle = (req, res) => {
  artHandler.edit(req.body);
}

module.exports = {
  getAllArticles,
  getArticle,
  setArticle,
  updateArticle,
}
