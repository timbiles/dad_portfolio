const express = require('express');

const { getForm, addForm, deleteForm } = require('./Ctrl/formCtrl');
const {
  getCalendar,
  addCalendar,
  deleteEvent,
  deleteOld
} = require('./Ctrl/calendarCtrl');
const { getArticles, addArticle } = require('./Ctrl/articleCtrl');
const { requestEmail } = require('./Ctrl/nodeCtrl');

module.exports = app => {

    // sessions
app.put('/api/admin', (req, res) => {
    const { user, pass } = req.body;
    const { ADMIN_LOGIN, ADMIN_PASSWORD } = process.env;
  
    if (user === ADMIN_LOGIN && pass === ADMIN_PASSWORD) {
      req.session.username = user;
      res.status(200).send(req.session);
    } else {
      res.status(500).send('error');
    }
  });
  
  app.get('/api/logged-in', (req, res) => {
    if (req.session.username) {
      return res.status(200).send(req.session);
    } else {
      return res.status(500);
    }
  });

app.get('/api/speaker-request', getForm);
app.post('/api/create-form', addForm);
app.delete('/api/delete-form/:id', deleteForm);

app.get('/api/calendar', getCalendar);
app.post('/api/add-to-calendar', addCalendar);
app.delete('/api/delete-event/:id', deleteEvent);
app.delete('/api/delete', deleteOld);

app.get('/api/articles', getArticles);
app.post('/api/article', addArticle);

app.post('/api/email', requestEmail);
}