const express = require('express');

const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/seed.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/dist')));
app.get('/', (req, res) => res.send('Hello World!'));


app.get('/reviews/:id', (req, res) => {
  db.findOneListing(req.params.id, (err, results) => {
    if (err) {
      res.status(404).end();
    } else {
      console.log('results!!', results);
      res.send(results);
    }
  });
});


app.listen(port, () => console.log('APP IS LISTENING'));
