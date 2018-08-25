import { combineReducers } from 'redux'

import recommend from './page/recommend'
import userlist from './page/userlist'
import albumlist from './page/albumlist'
import artistlist from './page/artistlist'
import playlist from './player/playlist'

export default combineReducers({
  recommend,
  albumlist,
  artistlist,
  userlist,

  playlist,
})