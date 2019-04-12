const express = require('express');

const app = express();
const port = 3001;
const path = require('path');
const bodyParser = require('body-parser');
const { Listing } = require('../database/schema.js');
const db = require('../database/index.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/reviews/:id', express.static(path.join(__dirname, '../client/dist')));


app.get('/api/reviews/:id', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  Listing.findOne(req.params, (err, results) => {
    if (err) {
      res.status(404).end();
    } else {
      res.send(results);
    }
  });
});


app.listen(port, () => console.log(`APP IS LISTENING ON ${port}`));
