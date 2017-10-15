/**
 * @file 播放列表
 */

import { ActionTypes } from '../../actions/player/playlist'

const initialState = {
  list: [],
  current: 0,
}

export default (state = initialState, { type, payload }) => {
  if (type === ActionTypes.PLAY_SONG) {
    return {
      ...state,
      ...payload
    }
  }

  return state
}