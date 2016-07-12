import * as types from './actionTypes';

export default {
  getUser: (userInfo) => {
    return {
      type: types.GET_USER,
      userInfo
    }
  },
}
