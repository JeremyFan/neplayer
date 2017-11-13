/**
 * @file 底部播放条
 */

import React, { Component } from 'react'

import styles from './index.styl'
import Icon from '../Icon'

import { getPicUrl } from '../../util'

class PlayerBar extends Component {
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

  render() {
    const { song, mode, playing, volume } = this.props

    if (!song) return null

    const ar = song && song.ar.map(a => a.name)
    const modeName = ['list', 'single', 'random'][mode]
    return (
      <div className={styles.bar}>
        <div className={styles.info}>
          <img className={styles.pic} src={getPicUrl(song.al.picUrl, 70)} />
          <div className={styles.title}>{song.name}</div>
          <div className={styles.desc}>{ar.join('/')}</div>
        </div>
        <div className={styles.controls}>
          <Icon className={styles.prev} id="prev" onClick={() => this.prev()} />
          <Icon className={styles.play} id={playing ? "pause" : "play"} onClick={() => this.togglePlay(song.id)} />
          {/* <Icon className={styles.pause} id="pause" /> */}
          <Icon className={styles.next} id="next" onClick={() => this.next()} />
        </div>
        <div className={styles.more}>
          <Icon className={styles.mode} id={"mode-" + modeName} onClick={ ()=> this.changeMode()} />
          <Icon className={styles.volume} id="volume" />
          <progress className={styles.volumeProgress} value={volume} max="100" onClick={e=>this.changeVolume(e)}></progress>
          <div className={styles.time}>
            00:50 / 04:02
          </div>
        </div>
      </div>
    )
  }

  changeMode() {
    const { mode } = this.props
    this.props.changeMode(mode)
  }

  togglePlay(songId) {
    const { playing } = this.props
    if (playing) {
      window.player.pause(songId)
    } else {
      window.player.play(songId)
    }
  }

  prev() {
    window.player.prev()
  }

  next() {
    window.player.next()
  }

  changeVolume(e){
    
  }
}

export default PlayerBar