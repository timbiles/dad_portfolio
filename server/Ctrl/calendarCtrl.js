const getCalendar = (req, res) => {
  const db = req.app.get('db');

  db.query('select * from calendar order by date')
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
      console.log(`Something went wrong!`);
    });
};

const addCalendar = (req, res) => {
  const db = req.app.get('db');

  db.calendar.insert(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
      console.log(`Something went wrong!`);
    });
};

const deleteEvent = (req, res) => {
  const db = req.app.get('db');

  db.calendar.destroy({id: req.params.id})
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

const deleteOld = (req, res) => {
  const db = req.app.get('db');

    db.query(`delete from calendar
  where date < 'yesterday'`)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

module.exports = {
  getCalendar,
  addCalendar,
  deleteEvent,
  deleteOld
};
