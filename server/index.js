require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const axios = require('axios');

const port = 3001;

const { getForm } = require('./Ctrl/formCtrl');

const app = express();
app.use(bodyParser.json());

console.log(`${__dirname}/../build`);
app.use(express.static(`${__dirname}/../build`));

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
  })
  .catch(err => {
    console.log(err);
  });

//endpoints
app.get('/api/speaker-request', getForm);

//run build
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
