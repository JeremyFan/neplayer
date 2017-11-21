/**
 * @file 专辑列表
 */

const ActionTypes = {
  FETCH_ALBUM_STARTED: Symbol(),
  FETCH_ALBUM_SUCCESS: Symbol(),
  FETCH_ALBUM_FAILURE: Symbol(),
}

const actions = {
  fetchAlbumStarted() {
    return {
      type: ActionTypes.FETCH_ALBUM_STARTED,
      payload: {}
    }
  },
  fetchAlbumSuccess(res) {
    const { songs, album } = res
    return {
      type: ActionTypes.FETCH_ALBUM_SUCCESS,
      payload: { songs, album }
    }
  },
  fetchAlbumFailure(error) {
    return {
      type: ActionTypes.FETCH_ALBUM_FAILURE,
      payload: { error }
    }
  },

  fetchAlbumInfo(ablumId) {
    return (dispatch) => {
      const url = `/api/album?id=${ablumId}`

      dispatch(actions.fetchAlbumStarted())

      fetch(url)
        .then(res => res.json())
        .then(res => {
          dispatch(actions.fetchAlbumSuccess(res))
        })
    }
  },
}

export { ActionTypes }
export default actions