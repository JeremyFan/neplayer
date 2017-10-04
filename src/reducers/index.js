import {combineReducers} from 'redux'

import locallist from './page/locallist'
import usersonglist from './page/usersonglist'
import albumlist from './page/albumlist'

export default combineReducers({
  locallist,
  usersonglist,
  albumlist
})