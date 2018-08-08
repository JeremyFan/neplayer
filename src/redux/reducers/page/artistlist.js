/**
 * @file 艺人相关
 */

import { ActionTypes } from '../../actions/page/artistlist'

const initialState = {
  songs: [],
  privileges: [],
  artist: {
    name: '',
    picUrl: ''
  },
}

export default (state = initialState, { type, payload }) => {
  if (type === ActionTypes.FETCH_ARTIST_SUCCESS) {
    return {
      ...state,
      ...payload
    }
  }

  return state
}
