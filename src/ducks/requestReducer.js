import axios from 'axios';

const initialState = {
  requests: [],
  organizationName: '',
  contactName: '',
  phoneNumber: '',
  email: '',
  eventName: '',
  eventDate: '',
  eventTime: '',
  speakerRequest: '',
  arrivalTime: '',
  eventLocation: '',
  eventDescription: '',
  eventTopic: '',
  presentationLength: '',
  presentationTime: '',
  presentationComments: '',
  airport: '',
  airportTransportation: '',
  lodging: '',
  lodgingLocation: '',
  travelExpenses: '',
  reimbursementReceipts: '',
  bio: '',
  img: '',
  w2: '',
  didErr: false
};

const GET_REQUESTS = 'GET_REQUESTS';
const UPDATE_ORGANIZATION_NAME = 'UPDATE_ORGANIZATION_NAME';
const UPDATE_CONTACT_NAME = 'UPDATE_CONTACT_NAME';
const UPDATE_PHONE_NUMBER = 'UPDATE_PHONE_NUMBER';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_EVENT_NAME = 'UPDATE_EVENT_NAME';
const UPDATE_EVENT_DATE = 'UPDATE_EVENT_DATE';
const UPDATE_EVENT_TIME = 'UPDATE_EVENT_TIME';
const UPDATE_SPEAKER_REQUEST = 'UPDATE_SPEAKER_REQUEST';
const UPDATE_ARRIVAL_TIME = 'UPDATE_ARRIVAL_TIME';
const UPDATE_EVENT_LOCATION = 'UPDATE_EVENT_LOCATION';
const UPDATE_EVENT_DESCRIPTION = 'UPDATE_EVENT_DESCRIPTION';
const UPDATE_EVENT_TOPIC = 'UPDATE_EVENT_TOPIC';
const UPDATE_PRESENTATION_LENGTH = 'UPDATE_PRESENTATION_LENGTH';
const UPDATE_PRESENTATION_TIME = 'UPDATE_PRESENTATION_TIME';
const UPDATE_PRESENTATION_COMMENTS = 'UPDATE_PRESENTATION_COMMENTS';
const UPDATE_AIRPORT = 'UPDATE_AIRPORT';
const UPDATE_AIRPORT_TRANSPORTATION = 'UPDATE_AIRPORT_TRANSPORTATION';
const UPDATE_LODGING = 'UPDATE_LODGING';
const UPDATE_LODGING_LOCATION = 'UPDATE_LODGING_LOCATION';
const UPDATE_TRAVEL_EXPENSES = 'UPDATE_TRAVEL_EXPENSES';
const UPDATE_REIMBURSEMENT_RECEIPTS = 'UPDATE_REIMBURSEMENT_RECEIPTS';
const UPDATE_BIO = 'UPDATE_BIO';
const UPDATE_IMG = 'UPDATE_IMG';
const UPDATE_W2 = 'UPDATE_W2';

export const getRequests = () => {
  return {
    type: GET_REQUESTS,
    payload: axios.get('/api/speaker-request')
  };
};

export const updateOrganization = organizationName => {
  return {
    type: UPDATE_ORGANIZATION_NAME,
    payload: organizationName
  };
};

export const updateContactName = contactName => {
  return {
    type: UPDATE_CONTACT_NAME,
    payload: contactName
  };
};

export const updatePhoneNumber = phoneNumber => {
  return {
    type: UPDATE_PHONE_NUMBER,
    payload: phoneNumber
  };
};

export const updateEmail = email => {
  return {
    type: UPDATE_EMAIL,
    payload: email
  };
};

export const updateEventName = eventName => {
  return {
    type: UPDATE_EVENT_NAME,
    payload: eventName
  };
};

export const updateEventDate = eventDate => {
  return {
    type: UPDATE_EVENT_DATE,
    payload: eventDate
  };
};

export const updateEventTime = eventTime => {
  return {
    type: UPDATE_EVENT_TIME,
    payload: eventTime
  };
};

export const updateSpeakerRequest = speakerRequest => {
  return {
    type: UPDATE_SPEAKER_REQUEST,
    payload: speakerRequest
  };
};

export const updateArrivalTime = arrivalTime => {
  return {
    type: UPDATE_ARRIVAL_TIME,
    payload: arrivalTime
  };
};

export const updateEventLocation = eventLocation => {
  return {
    type: UPDATE_EVENT_LOCATION,
    payload: eventLocation
  };
};

export const updateEventDescription = eventDescription => {
  return {
    type: UPDATE_EVENT_DESCRIPTION,
    payload: eventDescription
  };
};

export const updateEventTopic = eventTopic => {
  return {
    type: UPDATE_EVENT_TOPIC,
    payload: eventTopic
  };
};

export const updatePresentationLength = presentationLength => {
  return {
    type: UPDATE_PRESENTATION_LENGTH,
    payload: presentationLength
  };
};

export const updatePresentationTime = presentationTime => {
  return {
    type: UPDATE_PRESENTATION_TIME,
    payload: presentationTime
  };
};

export const updatePresentationComments = presentationComments => {
  return {
    type: UPDATE_PRESENTATION_COMMENTS,
    payload: presentationComments
  };
};

export const updateAirport = airport => {
  return {
    type: UPDATE_AIRPORT,
    payload: airport
  };
};

export const updateAirportTransportation = airportTransportation => {
  return {
    type: UPDATE_AIRPORT_TRANSPORTATION,
    payload: airportTransportation
  };
};

export const updateLodging = lodging => {
  return {
    type: UPDATE_LODGING,
    payload: lodging
  };
};

export const updateLodgingLocation = lodgingLocation => {
  return {
    type: UPDATE_LODGING_LOCATION,
    payload: lodgingLocation
  };
};

export const updateTravelExpenses = travelExpenses => {
  return {
    type: UPDATE_TRAVEL_EXPENSES,
    payload: travelExpenses
  };
};

export const updateReimbursementReceipts = reimbursementReceipts => {
  return {
    type: UPDATE_REIMBURSEMENT_RECEIPTS,
    payload: reimbursementReceipts
  };
};

export const updateBio = bio => {
  return {
    type: UPDATE_BIO,
    payload: bio
  };
};

export const updateImg = img => {
  return {
    type: UPDATE_IMG,
    payload: img
  };
};

export const updateW2 = w2 => {
  return {
    type: UPDATE_W2,
    payload: w2
  };
};

export default function locationReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_REQUESTS}_FULFILLED`:
      return {
        ...state,
        requests: action.payload.data
      };
    case `${GET_REQUESTS}_REJECTED`:
      return {
        ...state,
        didErr: true
      };

    case UPDATE_ORGANIZATION_NAME:
      return {
        ...state,
        organizationName: action.payload
      };
    case UPDATE_CONTACT_NAME:
      return {
        ...state,
        contactName: action.payload
      };
    case UPDATE_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: action.payload
      };
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    case UPDATE_EVENT_NAME:
      return {
        ...state,
        eventName: action.payload
      };
    case UPDATE_EVENT_DATE:
      return {
        ...state,
        eventDate: action.payload
      };
    case UPDATE_EVENT_TIME:
      return {
        ...state,
        eventTime: action.payload
      };
    case UPDATE_SPEAKER_REQUEST:
      return {
        ...state,
        speakerRequest: action.payload
      };
    case UPDATE_ARRIVAL_TIME:
      return {
        ...state,
        arrivalTime: action.payload
      };
    case UPDATE_EVENT_LOCATION:
      return {
        ...state,
        eventLocation: action.payload
      };
    case UPDATE_EVENT_DESCRIPTION:
      return {
        ...state,
        eventDescription: action.payload
      };
    case UPDATE_EVENT_TOPIC:
      return {
        ...state,
        eventTopic: action.payload
      };
    case UPDATE_PRESENTATION_LENGTH:
      return {
        ...state,
        presentationLength: action.payload
      };
    case UPDATE_PRESENTATION_TIME:
      return {
        ...state,
        presentationTime: action.payload
      };
    case UPDATE_PRESENTATION_COMMENTS:
      return {
        ...state,
        presentationComments: action.payload
      };
    case UPDATE_AIRPORT:
      return {
        ...state,
        airport: action.payload
      };
    case UPDATE_AIRPORT_TRANSPORTATION:
      return {
        ...state,
        airportTransportation: action.payload
      };
    case UPDATE_LODGING:
      return {
        ...state,
        lodging: action.payload
      };
    case UPDATE_LODGING_LOCATION:
      return {
        ...state,
        lodgingLocation: action.payload
      };
    case UPDATE_TRAVEL_EXPENSES:
      return {
        ...state,
        travelExpenses: action.payload
      };
    case UPDATE_REIMBURSEMENT_RECEIPTS:
      return {
        ...state,
        reimbursementReceipts: action.payload
      };
    case UPDATE_BIO:
      return {
        ...state,
        bio: action.payload
      };
    case UPDATE_IMG:
      return {
        ...state,
        img: action.payload
      };
    case UPDATE_W2:
      return {
        ...state,
        w2: action.payload
      };
    default:
      return state;
  }
}
