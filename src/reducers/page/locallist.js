/**
 * @file 本地列表
 */

import { ActionTypes } from '../../actions/page/locallist'

const initialState = {
  songs: [
    {
      id: 33894142,
      name: '成都Rappers',
      ar: [
        {
          id: 1132392,
          name: "马思唯",
        },
      ],
      al: {
        id: 3263992,
        name: "P.E.I Vol.2",
        picUrl: "http://p1.music.126.net/mocgR7CtRM_5LDU9W-NnJQ==/3341415837064327.jpg",
      },
    },
    {
      id: 133998,
      name: "老街",
      ar: [
        {
          id: 4292,
          name: "李荣浩",
        },
      ],
      al: {
        id: 13140,
        name: "小黄",
        picUrl: "http://p1.music.126.net/fZFrplIVrHMx4lvgdqiIHQ==/42880953496261.jpg",
      },
    },
    {
      id: 25731320,
      name: "男孩别哭",
      ar: [
        {
          id: 11830,
          name: "海龟先生",
        }
      ],
      al: {
        id: 2302169,
        name: "海龟先生",
        picUrl: "http://p1.music.126.net/tOhom1sERa_KgoA78Pqa1Q==/2423323627633522.jpg",
      },
    },
  ]
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