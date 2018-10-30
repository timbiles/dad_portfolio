const getCalendar = (req, res) => {
  const db = req.app.get('db');

  db.calendar
    .get_calendar()
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
  const { event, date, time, location } = req.body;

  db.calendar
    .add_to_calendar([event, date, time, location])
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
  const { id } = req.params;

  db.calendar
    .delete_event([id])
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

  db.calendar
    .delete_old()
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
