/**
 * @file 歌单
 */

const ActionTypes = {
  FETCH_SONGS_STARTED: Symbol(),
  FETCH_SONGS_SUCCESS: Symbol(),
  FETCH_SONGS_FAILURE: Symbol(),
  ADD_SONG: Symbol(),
  REMOVE_SONG: Symbol(),
}

const actions = {
  fetchSongsStarted() {
    return {
      type: ActionTypes.FETCH_SONGS_STARTED,
      payload: {}
    }
  },
  fetchSongsSuccess(playlist) {
    const {tracks}=playlist
    return {
      type: ActionTypes.FETCH_SONGS_SUCCESS,
      payload: { tracks }
    }
  },
  fetchSongsFailure(error) {
    return {
      type: ActionTypes.FETCH_SONGS_FAILURE,
      payload: { error }
    }
  },

  fetchSongs(listId) {
    return (dispatch) => {
      const url = `/api/playlist/detail?id=${listId}`

      dispatch(actions.fetchSongsStarted())

      fetch(url)
        .then(res => res.json())
        .then(res => {
          dispatch(actions.fetchSongsSuccess(res.playlist))
        })
    }
  },

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