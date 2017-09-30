import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import 'whatwg-fetch'
import 'howler'

import reducers from './reducers'
import App from './App'

let store = createStore(reducers)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

// fetch('/api/music/url?id=347230')
//   .then(res => res.json())
//   .then(({ code, data }) => {
//     console.log(data)
//     let sound = new Howl({
//       src: [data[0].url],
//       // html5:true
//     });

//     sound.play();
//   })