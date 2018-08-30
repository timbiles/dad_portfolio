require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const axios = require('axios');

const port = process.env.PORT || 3001;

const { getForm, addForm, getCalendar, addCalendar, deleteOld } = require('./Ctrl/formCtrl');

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
app.post('/api/create-form', addForm);

app.get('/api/calendar', getCalendar);
app.post('/api/add-to-calendar', addCalendar);
app.delete('/api/delete', deleteOld)

//run build
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
