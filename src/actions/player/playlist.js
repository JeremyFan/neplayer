/**
 * @file 播放列表
 * @desc 选链、播放模式、增删资源
 */

const ActionTypes = {
  FETCH_SONGLINK_START: Symbol(),
  FETCH_SONGLINK_SUCCESS: Symbol(),
  FETCH_SONGLINK_FAILURE: Symbol(),
  PLAY_SONG: Symbol(),
}

const actions = {
  fetchSongLinkStart() {

  },

  fetchSongLinkSuccess(res) {
    const { data } = res

    return {
      type: ActionTypes.FETCH_SONGLINK_SUCCESS,
      payload: { links: data, hasLink: true }
    }
  },

  fetchSongLinkFailure() {

  },

  /**
   * 选链
   * @param {Array} ids 歌曲id数组
   */
  fetchSongLink(ids) {
    return (dispatch) => {
      const url = `/api/music/url?id=${ids.join(',')}`

      // dispatch(actions.fetchSongLinkStart())

      fetch(url)
        .then(res => res.json())
        .then(res => {
          dispatch(actions.fetchSongLinkSuccess(res))
        })
    }
  },

  playSong(id){
    
  }
}

export { ActionTypes }
export default actions