const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3030;

const articles = require('./articles');

app.use(express.static('public'));
app.use( bodyParser.json() );
app.use( cors() );

app.get('/', articles.getAllArticles);
app.get('/:id', articles.getArticle);
app.post('/', articles.setArticle);
app.put('/', articles.updateArticle);

app.listen(port);

console.log(`Listening on port: ${port}`);
