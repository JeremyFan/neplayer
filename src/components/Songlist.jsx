/**
 * @file 基础歌曲列表组件
 */
import React from 'react'
import Song from './Song'

const Songlist = (props) => {
  const songItems = props.songs.map(song => (
    <Song
      key={song.id}
      {...song}
    />
  ))

  return (
    <div>
      <div>
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