const getForm = (req, res) => {
    const db = req.app.get('db');
  
    db.get_form()
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send(err);
        console.log(`Something went wrong!`);
      });
  };

  module.exports = {
      getForm
  }