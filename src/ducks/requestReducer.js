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
const UPDATE_INPUT = 'UPDATE_INPUT';

export const getRequests = () => {
  return {
    type: GET_REQUESTS,
    payload: axios.get('/api/speaker-request')
  };
};

export const updateInput = input => {
  return {
    type: UPDATE_INPUT,
    payload: input
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
    case UPDATE_INPUT:
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value
      };

    default:
      return state;
  }
}
