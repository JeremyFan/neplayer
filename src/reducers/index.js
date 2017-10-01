import {combineReducers} from 'redux'

import locallist from './page/locallist'
import usersonglist from './page/usersonglist'

export default combineReducers({
  locallist,
  usersonglist,
})