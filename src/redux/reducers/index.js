import {combineReducers} from 'redux'

import locallist from './page/locallist'
import userList from './page/userList'
import albumList from './page/albumList'
import artistList from './page/artistList'
import playlist from './player/playlist'

export default combineReducers({
  locallist,

  albumList,
  artistList,
  userList,
  
  playlist,
})