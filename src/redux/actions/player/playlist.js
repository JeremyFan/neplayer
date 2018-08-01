/**
 * @file 播放列表
 * @desc 选链、播放模式、增删资源
 */

const ActionTypes = {
  UPDATE_PROPS: Symbol(),
  PLAY_SONG: Symbol(),
  PAUSE: Symbol(),
  PREV: Symbol(),
  NEXT: Symbol(),
  CHANGE_MODE: Symbol(),
  UPDATE_LIST: Symbol(),
  UPDATE_VOLUME: Symbol(),
}

const actions = {
  updateProps(payload) {
    return {
      type: ActionTypes.UPDATE_PROPS,
      payload,
    }
  },

  /**
   * 播放id
   * @param {Number} id 歌曲id
   */
  playSong(id) {
    return {
      type: ActionTypes.PLAY_SONG,
      payload: {
        current: id,
        playing: true
      }
    }
  },

  updateVolume(volume) {
    return {
      type: ActionTypes.UPDATE_VOLUME,
      payload: { volume },
    }
  },

  updateList(listName, ids) {
    return {
      type: ActionTypes.UPDATE_LIST,
      payload: {
        currentList: listName,
        list: ids
      }
    }
  },

  pause(id) {
    return {
      type: ActionTypes.PAUSE,
      payload: {
        // current: id,
        playing: false
      }
    }
  },

  prev() {

  },

  next() {

  },

  /**
   * 切换播放模式
   * @param {Number} prevMode 当前播放模式
   */
  changeMode(currentMode) {
    return {
      type: ActionTypes.CHANGE_MODE,
      payload: {
        mode: (currentMode + 1) % 3
      }
    }
  }
}

export { ActionTypes }
export default actions