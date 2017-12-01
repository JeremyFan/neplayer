/**
 * @file 艺人页
 * @desc 展示艺人信息、艺人热门歌曲
 */

// 热门歌曲展示数量
const SONG_COUNT = 10

const ActionTypes = {
  FETCH_ARTIST_STARTED: Symbol(),
  FETCH_ARTIST_SUCCESS: Symbol(),
  FETCH_ARTIST_FAILURE: Symbol(),
}

const actions = {
  fetchArtistStarted() {
    return {
      type: ActionTypes.FETCH_ARTIST_STARTED,
      payload: {}
    }
  },
  fetchArtistSuccess(res) {
    const { hotSongs, artist } = res

    const songs = hotSongs.slice(0, SONG_COUNT)

    return {
      type: ActionTypes.FETCH_ARTIST_SUCCESS,
      payload: { songs, artist }
    }
  },
  fetchArtistFailure(error) {
    return {
      type: ActionTypes.FETCH_ARTIST_FAILURE,
      payload: { error }
    }
  },

  fetchArtistInfo(artistId) {
    return (dispatch) => {
      const url = `/api/artists?id=${artistId}`

      dispatch(actions.fetchArtistStarted())

      fetch(url)
        .then(res => res.json())
        .then(res => {
          dispatch(actions.fetchArtistSuccess(res))
        })
    }
  },
}

export { ActionTypes }
export default actions