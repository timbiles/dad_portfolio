const getForm = (req, res) => {
  const db = req.app.get('db');

  db.form
    .get_form()
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

  db.form
    .add_form([
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

const deleteForm = (req, res) => {
  const db = req.app.get('db');

  db.form
    .delete_form([req.params.id])
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
