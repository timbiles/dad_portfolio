const moment = require('moment');

const getArticles = (req, res) => {
  const db = req.app.get('db');

  db.query('select * from articles order by id desc')  
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

addArticle = (req, res) => {
  const db = req.app.get('db');

  db.articles.insert(req.body)  
  .then(response => {
    res.status(200).send(response)
  })
  .catch(err=> {
    res.status(500).send(err)
  })
}

module.exports = {
  getArticles,
  addArticle
};
