import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import 'whatwg-fetch'
import 'howler'

import routes from './routes'
import reducers from './reducers'
// import App from './App'
import Album from './containers/Album'

import './styl/reset.styl'

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

render(
  <Provider store={store}>
    { routes }
  </Provider>,
  document.getElementById('app')
)