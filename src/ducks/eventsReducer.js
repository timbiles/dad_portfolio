import axios from 'axios';

const initialState = {
  event: '',
  date: '',
  location: '',
  calendar: [],
  didErr: false,
};

const UPDATE_EVENT = 'UPDATE_EVENT';
const UPDATE_DATE = 'UPDATE_DATE';
const UPDATE_LOCATION = 'UPDATE_LOCATION';
const GET_CALENDAR = 'GET_CALENDAR'

export const updateEvent = event => {
  return {
    type: UPDATE_EVENT,
    payload: event
  };
};

export const updateDate = date => {
  return {
    type: UPDATE_DATE,
    payload: date
  };
};

export const updateLocation = location => {
  return {
    type: UPDATE_LOCATION,
    payload: location
  };
};

export function getCalendar() {
  return {
    type: GET_CALENDAR,
    payload: axios.get('/api/calendar')
  };
}

export default function locationReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_CALENDAR}_FULFILLED`:
      return {
        ...state,
        calendar: action.payload.data
      };
    case `${GET_CALENDAR}_REJECTED`:
      return {
        ...state,
        didErr: true
      };
    case UPDATE_EVENT:
      return {
        ...state,
        event: action.payload
      };
    case UPDATE_DATE:
      return {
        ...state,
        date: action.payload
      };
    case UPDATE_LOCATION:
      return {
        ...state,
        location: action.payload
      };
    default:
      return state;
  }
}
