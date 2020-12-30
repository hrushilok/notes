import { LOGIN } from '../actions/types';

const authReducer = (state = null, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...action.payload };
    default:
      return state;
  }
};

export default authReducer;
