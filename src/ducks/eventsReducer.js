const initialState = {
  event: '',
  date: '',
  location: ''
};

const UPDATE_EVENT = 'UPDATE_EVENT';
const UPDATE_DATE = 'UPDATE_DATE';
const UPDATE_LOCATION = 'UPDATE_LOCATION';

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

export default function locationReducer(state = initialState, action) {
  switch (action.type) {
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
