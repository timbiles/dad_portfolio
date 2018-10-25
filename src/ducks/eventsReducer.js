import axios from 'axios';

const initialState = {
  event: '',
  date: '',
  time: '',
  location: '',
  calendar: [],
  didErr: false
};

const UPDATE_INPUT = 'UPDATE_INPUT';
const GET_CALENDAR = 'GET_CALENDAR';

export const updateInput = input => {
  return {
    type: UPDATE_INPUT,
    payload: input
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
      case UPDATE_INPUT:
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value
      };
    default:
      return state;
  }
}
