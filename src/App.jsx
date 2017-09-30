import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import Song from './components/Song'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { songs } = this.props

    const songLis = songs.map(song => (
      <Song
        key={song.id}
        {...song}
      />
    ))

    return (
      <ul>
        {songLis}
      </ul>
    )
  }
}

export default connect(state => {
  return {
    ...state.locallist
  }
})(App)