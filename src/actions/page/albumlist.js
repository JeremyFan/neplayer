/**
 * @file 专辑列表
 */

const ActionTypes = {
  FETCH_SONGS_STARTED: Symbol(),
  FETCH_SONGS_SUCCESS: Symbol(),
  FETCH_SONGS_FAILURE: Symbol(),
}

const actions = {
  fetchSongsStarted() {
    return {
      type: ActionTypes.FETCH_SONGS_STARTED,
      payload: {}
    }
  },
  fetchSongsSuccess(res) {
    const { songs, album } = res
    return {
      type: ActionTypes.FETCH_SONGS_SUCCESS,
      payload: { songs, album }
    }
  },
  fetchSongsFailure(error) {
    return {
      type: ActionTypes.FETCH_SONGS_FAILURE,
      payload: { error }
    }
  },

  fetchSongs(ablumId) {
    return (dispatch) => {
      const url = `/api/album?id=${ablumId}`

      dispatch(actions.fetchSongsStarted())

      fetch(url)
        .then(res => res.json())
        .then(res => {
          dispatch(actions.fetchSongsSuccess(res))
        })
    }
  },
}

export { ActionTypes }
export default actions