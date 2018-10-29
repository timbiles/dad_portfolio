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

const addForm = (req, res) => {
  const db = req.app.get('db');
  const {
    organizationName,
    contactName,
    phoneNumber,
    email,
    eventName,
    eventDate,
    eventTime,
    speakerRequest,
    arrivalTime,
    eventLocation,
    eventDescription,
    eventTopic,
    presentationLength,
    presentationTime,
    presentationComments,
    airport,
    airportTransportation,
    lodging,
    lodgingLocation,
    travelExpenses,
    reimbursementReceipts,
    bio,
    img,
    w2
  } = req.body;

  db.add_form([
    organizationName,
    contactName,
    phoneNumber,
    email,
    eventName,
    eventDate,
    eventTime,
    speakerRequest,
    arrivalTime,
    eventLocation,
    eventDescription,
    eventTopic,
    presentationLength,
    presentationTime,
    presentationComments,
    airport,
    airportTransportation,
    lodging,
    lodgingLocation,
    travelExpenses,
    reimbursementReceipts,
    bio,
    img,
    w2
  ])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

const getCalendar = (req, res) => {
  const db = req.app.get('db');

  db.get_calendar()
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

  db.add_to_calendar([event, date, time, location])
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

  db.delete_event([id])
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

  db.delete_old()
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

  db.delete_form([req.params.id])
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
  getCalendar,
  addCalendar,
  deleteEvent,
  deleteOld,
  deleteForm
};
