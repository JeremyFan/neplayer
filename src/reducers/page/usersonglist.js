/**
 * @file 歌单
 */

import { ActionTypes } from '../../actions/page/usersonglist'

const initialState = {
  tracks: []
}

export default (state = initialState, { type, payload }) => {
  if (type === ActionTypes.FETCH_SONGS_SUCCESS) {
    return {
      ...state,
      ...payload
    }
  }

  return state
}