import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import 'whatwg-fetch'

import Player from './player'
import routes from './routes'
import reducers from './redux/reducers'
// import App from './App'
import Album from './containers/Album'

import './styl/reset.styl'
import './styl/base.styl'

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.player = new Player

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
)