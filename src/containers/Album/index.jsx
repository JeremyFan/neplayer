import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import actions from '../../redux/actions/page/albumlist'
import playActions from '../../redux/actions/player/playlist'

import Songlist from '../../components/Songlist'
import Background from '../../components/Background'
import CurrentList from '../../components/CurrentList'

import styles from './index.styl'

class Album extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { songs, album } = this.props

    return (
      <div>
        <section>
          <CurrentList
            type="album"
            picUrl={album.picUrl}
            info={album}
          />
          <Songlist songs={songs} />
        </section>
        <Background imgUrl={album.picUrl} />
      </div>
    )
  }

  componentDidMount() {
    const { match } = this.props
    const { id } = match.params

    this.props.fetchAlbumInfo(id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbumInfo(id) {
      dispatch(actions.fetchAlbumInfo(id))
    }
  }
}

export default connect(state => {
  return {
    ...state.albumList,
    ...state.playlist
  }
}, mapDispatchToProps)(Album)