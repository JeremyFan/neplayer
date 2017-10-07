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
    window.player.play(songId)
  }

  render() {
    const songItems = this.props.songs.map((song,i) => (
      <Song
        index={i}
        key={song.id}
        {...song}

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