import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import actions from '../../actions/page/userList'
import playActions from '../../actions/player/playlist'

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
    const { songs, info, current } = this.props

    const currentSong = this.getCurrentSongs(songs, current)
    const coverUrl = this.getCover(info, currentSong)

    return (
      <div className={styles.page}>
        <section className={styles.sec}>
          <CurrentList
            type="userlist"
            picUrl={info.coverImgUrl}
            info={info}
          />
          <Scrollbar>
            <Songlist {...this.props} />
          </Scrollbar>
        </section>
        <PlayerBar song={currentSong} />
        <Background imgUrl={coverUrl} />
      </div>
    )
  }

  getCurrentSongs(songs, id) {
    return songs.find(s => s.id === id)
  }

  getCover(info, currentSong) {
    let url = info.coverImgUrl

    if (currentSong && currentSong.al && currentSong.al.picUrl)
      url = currentSong.al.picUrl

    return url
  }

  componentDidMount() {
    const { match } = this.props
    const { id } = match.params

    this.props.fetchUserListInfo(id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUserListInfo(id) {
      dispatch(actions.fetchUserListInfo(id))
    },

    playSong(id) {
      // FIXME 暂时先放这里
      // window.player.play(id)

      dispatch(playActions.playSong(id))
    },
  }
}

export default connect(state => {
  return {
    ...state.userList,
    ...state.playlist
  }
}, mapDispatchToProps)(Artist)