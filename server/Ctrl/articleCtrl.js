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

addArticle = (req, res) => {
  const db = req.app.get('db');
  const {title, img, url, date, topic, desc} = req.body
  console.log(req.body)

  db.article.add_article([title, img, url, date, topic, desc])
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
