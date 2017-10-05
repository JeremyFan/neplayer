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
    const songItems = this.props.songs.map(song => (
      <Song
        key={song.id}
        {...song}

        onClick={() => this.handleClick(song.id)}
      />
    ))

    return (
      <div>
        <div className={styles.songlistHeader}>
          <span>歌曲</span>
          <span>歌手</span>
          <span>专辑</span>
          <span>时长</span>
        </div>
        <ul>
          {songItems}
        </ul>
      </div>
    )
  }
}

export default Songlist