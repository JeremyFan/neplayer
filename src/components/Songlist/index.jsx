/**
 * @file 基础歌曲列表组件
 */
import React from 'react'

import styles from './index.styl'
import Song from '../Song'

console.log(styles)

const Songlist = (props) => {
  const songItems = props.songs.map(song => (
    <Song
      key={song.id}
      {...song}
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

export default Songlist