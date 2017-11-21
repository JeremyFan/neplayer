/**
 * @file 本地列表
 */

import { ActionTypes } from '../../actions/page/locallist'

const initialState = {
  songs: []
}

export default (state = initialState, { type, payload }) => {
  if (type === ActionTypes.ADD_SONG) {
    return {
      ...state,
      ...payload,
    }
  }

  return state
}