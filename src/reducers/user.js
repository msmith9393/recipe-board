import { GET_USER } from './../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return action.userInfo;
    default:
      return state;
  }
}
