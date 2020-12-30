import _ from 'lodash';
import { CREATE_NOTE, DELETE_NOTE, FETCH_NOTES } from '../actions/types';

const noteReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case CREATE_NOTE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_NOTE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default noteReducer;
