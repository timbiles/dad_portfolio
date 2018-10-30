const moment = require('moment');

const getArticles = (req, res) => {
  const db = req.app.get('db');

  db.article
    .get_articles()
    .then(response => {
      response.map(e => {
        e.date = moment.utc(e.date, 'MMMM D, YYYY').format('MMMM D, YYYY');
      });
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
      console.log(`Something went wrong!`);
    });
};

module.exports = {
  getArticles
};
