const getForm = (req, res) => {
  const db = req.app.get('db');

  db.query('select * from form')
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
      console.log(`Something went wrong!`);
    });
};

const addForm = (req, res) => {
  const db = req.app.get('db');

  db.form.insert(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

const deleteForm = (req, res) => {
  const db = req.app.get('db');

  db.form.destroy({id: req.params.id})
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

module.exports = {
  getForm,
  addForm,
  deleteForm
};
