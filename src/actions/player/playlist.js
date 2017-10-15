/**
 * @file 播放列表
 * @desc 选链、播放模式、增删资源
 */

const ActionTypes = {
  PLAY_SONG: Symbol(),
}

const actions = {
  playSong(id) {
    return {
      type: ActionTypes.PLAY_SONG,
      payload: {
        current: id
      }
    }
  }
}

export { ActionTypes }
export default actions