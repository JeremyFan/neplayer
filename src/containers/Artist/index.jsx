import React, { Component } from 'react'
import { connect } from 'react-redux'

import actions from '../../redux/actions/page/artistlist'
import playActions from '../../redux/actions/player/playlist'

import CurrentList from '../../components/CurrentList'
import Songlist from '../../components/Songlist'
import PlayerBar from '../../components/PlayerBar'
import Background from '../../components/Background'
import Scrollbar from '../../components/Scrollbar'

import styles from './index.styl'

class Artist extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { songs, artist, current } = this.props

    const currentSong = this.getCurrentSong(songs, current)

    return (
      <div className={styles.page}>
        <section className={styles.sec}>
          <CurrentList
            type="artist"
            picUrl={artist.picUrl}
            info={artist}
          />
          <Scrollbar>
            <Songlist {...this.props} />
          </Scrollbar>
        </section>
        <PlayerBar song={currentSong} {...this.props} />
        <Background imgUrl={artist.picUrl} />
      </div>
    )
  }

  componentDidMount() {
    const { match } = this.props
    const { id } = match.params

    this.props.fetchArtistInfo(id)
  }

  getCurrentSong(songs, id) {
    return songs.find(s => s.id === id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchArtistInfo(id) {
      dispatch(actions.fetchArtistInfo(id))
    },

    playSong(id) {
      dispatch(playActions.playSong(id))
    },

    updateList(listName, ids) {
      window.player.setList(ids)

      dispatch(playActions.updateList(listName, ids))
    },

    updateVolume(value) {
      dispatch(playActions.updateVolume(value))
    },

    updateProps(payload) {
      dispatch(playActions.updateProps(payload))
    },

    pause(id) {
      dispatch(playActions.pause(id))
    },

    changeMode(currentMode) {
      dispatch(playActions.changeMode(currentMode))
    }
  }
}

export default connect(state => {
  return {
    ...state.artistlist,
    ...state.playlist
  }
}, mapDispatchToProps)(Artist)