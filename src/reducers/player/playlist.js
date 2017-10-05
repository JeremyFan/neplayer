/**
 * @file 播放列表
 */

import { ActionTypes } from '../../actions/player/playlist'

const initialState = {
  links: [],
  hasLink: false,
}

export default (state = initialState, { type, payload }) => {
  if (type === ActionTypes.FETCH_SONGLINK_SUCCESS) {
    return {
      ...state,
      ...payload
    }
  }

  return state
}