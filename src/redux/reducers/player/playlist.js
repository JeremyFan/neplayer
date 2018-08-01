/**
 * @file 播放列表
 */

import { ActionTypes } from '../../actions/player/playlist'

const initialState = {
  list: [],
  // 当前播放模式：0顺序播放|1单曲循环|2随机播放
  mode: 0,
  // 当前歌曲id
  current: 0,
  // 当前正在播放的列表
  currentList: '',
  // 是否正在播放
  playing: false,
  volume: 50,
}

export default (state = initialState, { type, payload }) => {
  if (type === ActionTypes.PLAY_SONG
    || type === ActionTypes.CHANGE_MODE
    || type === ActionTypes.PAUSE
    || type === ActionTypes.UPDATE_VOLUME
  ) {
    return {
      ...state,
      ...payload
    }
  } else if (type === ActionTypes.PREV) {
    state.list
  }

  return state
}