import {combineReducers} from 'redux'

import userList from './page/userList'
import albumList from './page/albumList'
import artistList from './page/artistList'
import playlist from './player/playlist'

export default combineReducers({
  albumList,
  artistList,
  userList,
  
  playlist,
})