const express = require('express');
const bodyParser = require('body-parser');
const bC = require('./controllers/books_controller');

const app = express();

app.use(bodyParser.json());

app.get('/api/books', bC.read);
app.post('/api/books', bC.create);
app.put('/api/books/:id', bC.update);

const port = 3000;
app.listen(port, ()=> console.log(`server listening on port ${port}`))