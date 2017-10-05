import {combineReducers} from 'redux'

import locallist from './page/locallist'
import usersonglist from './page/usersonglist'
import albumlist from './page/albumlist'
import playlist from './player/playlist'

export default combineReducers({
  locallist,
  usersonglist,
  albumlist,
  playlist,
})