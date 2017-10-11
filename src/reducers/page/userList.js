/**
 * @file 用户歌单
 */

import { ActionTypes } from '../../actions/page/userList'

const initialState = {
  songs: [],
  info: {
    creator:{},
  },
}

export default (state = initialState, { type, payload }) => {
  if (type === ActionTypes.FETCH_USERLIST_SUCCESS) {
    return {
      ...state,
      ...payload
    }
  }

  return state
}