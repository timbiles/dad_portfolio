require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const axios = require('axios');
const path = require('path');

const port = process.env.SERVER_PORT || 3001;

const {
  getForm,
  addForm,
  getCalendar,
  addCalendar,
  deleteEvent,
  deleteOld
} = require('./Ctrl/formCtrl');
const { requestEmail } = require('./Ctrl/nodeCtrl');

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

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2
    }
  })
);

// sessions
app.put('/api/admin', (req, res) => {
  const { user, pass } = req.body;
  const { ADMIN_LOGIN, ADMIN_PASSWORD } = process.env;
  
  if (user === ADMIN_LOGIN && pass === ADMIN_PASSWORD) {
    req.session.username = user;
    res.status(200).send(req.session);
  } else {
    res.status(500).send('error')
  }
});

app.get('/api/logged-in', (req, res) => {
  if (req.session.username) {
    return res.status(200).send(req.session);
  } else {
    return res.status(500);
  }
});

//endpoints
app.get('/api/speaker-request', getForm);
app.post('/api/create-form', addForm);
app.get('/api/calendar', getCalendar);
app.post('/api/add-to-calendar', addCalendar);
app.delete('/api/delete-event/:id', deleteEvent);
app.delete('/api/delete', deleteOld);

//node endpoints
app.post('/api/email', requestEmail);

//run build
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
