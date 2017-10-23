import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import actions from './actions/page/usersonglist'
import Song from './components/Song'

class App extends Component {
  constructor(props) {
    super(props)
  } 

  render() {
    let { tracks } = this.props

    const songLis = tracks.map(song => (
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

  componentDidMount(){
    this.props.dispatch(actions.fetchSongs(930215890))
  }
}

export default connect(state => {
  return {
    ...state.usersonglist
  }
})(App)