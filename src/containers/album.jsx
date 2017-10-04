import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import actions from '../actions/page/albumlist'
// import Song from '../components/Song'
import Songlist from '../components/Songlist'

class Album extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { songs } = this.props

    return (
      <Songlist
        songs={songs}
      />
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