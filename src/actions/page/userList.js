/**
 * @file 用户创建的歌单
 * @desc 用户信息、歌单歌曲
 */

const ActionTypes = {
  FETCH_USERLIST_STARTED: Symbol(),
  FETCH_USERLIST_SUCCESS: Symbol(),
  FETCH_USERLIST_FAILURE: Symbol(),
}

const actions = {
  fetchUserListStarted() {
    return {
      type: ActionTypes.FETCH_USERLIST_STARTED,
      payload: {}
    }
  },
  fetchUserListSuccess(res) {
    const { tracks: songs, creator, name, id, createTime, coverImgUrl } = res.playlist
    const info = {
      creator, name, id, createTime, coverImgUrl
    }
    return {
      type: ActionTypes.FETCH_USERLIST_SUCCESS,
      payload: { songs, info }
    }
  },
  fetchUserListFailure(error) {
    return {
      type: ActionTypes.FETCH_USERLIST_FAILURE,
      payload: { error }
    }
  },

  fetchUserListInfo(listId) {
    return (dispatch) => {
      const url = `/api/playlist/detail?id=${listId}`

      dispatch(actions.fetchUserListStarted())

      fetch(url)
        .then(res => res.json())
        .then(res => {
          dispatch(actions.fetchUserListSuccess(res))
        })
    }
  }
}

export { ActionTypes }
export default actions