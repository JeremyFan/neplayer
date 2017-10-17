/**
 * @file 基础歌曲列表组件
 */
import React, { Component } from 'react'

import styles from './index.styl'
import Song from '../Song'

class Songlist extends Component {
  constructor(props) {
    super(props)
  }

  handleClick(songId) {
    this.props.playSong(songId)
  }

  render() {
    const { songs, current } = this.props

    const songItems = songs.map((song, i) => (
      <Song
        index={i}
        key={song.id}
        {...song}
        isActive={song.id === current}
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