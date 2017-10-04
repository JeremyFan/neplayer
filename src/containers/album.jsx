import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import actions from '../actions/page/albumlist'
import Song from '../components/Song'

class Album extends Component {
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

  componentDidMount() {
    const { match } = this.props
    const { id } = match.params
    this.props.dispatch(actions.fetchSongs(id))
  }
}

export default connect(state => {
  return {
    ...state.albumlist
  }
})(Album)