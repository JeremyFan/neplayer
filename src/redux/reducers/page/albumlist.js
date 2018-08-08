/**
 * @file 专辑列表
 */

import { ActionTypes } from '../../actions/page/albumlist'

const initialState = {
  songs: [],
  privileges: [],
  album: {
    artists: [],
    publishTime: 0
  },
}

export default (state = initialState, { type, payload }) => {
  if (type === ActionTypes.FETCH_ALBUM_SUCCESS) {
    return {
      ...state,
      ...payload
    }
  }

  return state
}