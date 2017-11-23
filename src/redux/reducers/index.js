import { combineReducers } from 'redux'

import userlist from './page/userlist'
import albumlist from './page/albumlist'
import artistlist from './page/artistlist'
import playlist from './player/playlist'

export default combineReducers({
  albumlist,
  artistlist,
  userlist,

  playlist,
})