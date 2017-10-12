import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import actions from '../../actions/page/artistList'
import playActions from '../../actions/player/playlist'

import CurrentList from '../../components/CurrentList'
import Songlist from '../../components/Songlist'
import Background from '../../components/Background'

import styles from './index.styl'

class Artist extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { songs, artist } = this.props

    return (
      <div>
        <section>
          <CurrentList
            type="artist"
            picUrl={artist.picUrl}
            info={artist}
          />
          <Songlist songs={songs} />
        </section>
        <Background imgUrl={artist.picUrl} />
      </div>
    )
  }

  componentDidMount() {
    const { match } = this.props
    const { id } = match.params

    this.props.fetchArtistInfo(id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchArtistInfo(id) {
      dispatch(actions.fetchArtistInfo(id))
    }
  }
}

export default connect(state => {
  return {
    ...state.artistList,
    ...state.playlist
  }
}, mapDispatchToProps)(Artist)