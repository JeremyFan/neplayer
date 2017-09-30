/**
 * @file 本地列表
 */

const ActionTypes = {
  ADD_SONG: Symbol(),
  REMOVE_SONG: Symbol(),
}

const actions = {
  addSong(id) {
    return {
      type: ActionTypes.ADD_SONG,
      payload: { id }
    }
  },

  removeSong(id) {
    return {
      type: ActionTypes.REMOVE_SONG,
      payload: { id }
    }
  }
}

export { ActionTypes }
export default actions