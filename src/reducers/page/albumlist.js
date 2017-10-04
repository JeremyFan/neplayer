/**
 * @file 专辑列表
 */

import { ActionTypes } from '../../actions/page/albumlist'

const initialState = {
  songs: [],
  album: {},
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