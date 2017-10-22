/**
 * @file 基础歌曲列表组件
 */
import React, { Component } from 'react'

import styles from './index.styl'
import Song from '../Song'

class Songlist extends Component {
  constructor(props) {
    super(props)

    window.player
      .on('player:play', songId => {
        props.playSong(songId)
      })
      .on('player:pause', songId => {
        props.pause(songId)
      })
  }

  handleClick(songId) {
    const { playing, current, songs, currentList, match } = this.props
    const list = this.getListName(match)
    const ids = songs.map(s => s.id)

    if (currentList !== list) {
      this.props.updateList(list, ids)
    }

    if (songId !== current || !playing) {
      window.player.play(songId)
    } else {
      window.player.pause(songId)
    }
  }

  getListName(match) {
    return match.url.split('/').filter(v => v).join('_')
  }

  render() {
    const { songs, current, playing } = this.props

    const songItems = songs.map((song, i) => (
      <Song
        index={i}
        key={song.id}
        {...song}
        isActive={song.id === current}
        playing={playing}
        onClick={() => this.handleClick(song.id)}
      />
    ))

    return (
      <ol className={styles.songlist}>
        {songItems}
      </ol>
    )
  }
}

export default Songlist