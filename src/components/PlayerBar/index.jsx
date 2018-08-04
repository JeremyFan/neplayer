/**
 * @file 底部播放条
 */

import React, { Component } from 'react'
import Icon from '../Icon'
import Volumer from '../Volumer'
import { getPicUrl, getDuration } from '../../util'
import styles from './index.styl'


class PlayerBar extends Component {
  constructor(props) {
    super(props)

    window.player
      .on('player:play', songId => {
        props.playSong(songId)
        this.setSeekInterval()
      })
      .on('player:pause', songId => {
        props.pause(songId)
        this.clearSeekInterval()
      })
  }

  setSeekInterval() {
    const { updateProps } = this.props

    if (!this.timer) {
      this.timer = setInterval(() => {
        const howler = window.player.getHowler()
        updateProps({
          seek: getDuration(howler.seek() * 1000)
        })
      }, 500)
    }
  }

  clearSeekInterval() {
    clearInterval(this.timer)
  }

  render() {
    const { song, mode, playing, volume, seek } = this.props

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
          <Icon className={styles.mode} id={"mode-" + modeName} onClick={() => this.changeMode()} />
          <Icon className={styles.volume} id="volume" />
          <Volumer value={volume} onChange={v => this.updateVolume(v)} />
          <div className={styles.time}>
            {seek} / {getDuration(song.dt)}
          </div>
        </div>
      </div>
    )
  }

  componentWillUnmount() {
    this.clearSeekInterval()
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

  updateVolume(value) {
    const howler = window.player.getHowler()

    howler.volume(value / 100)
    this.props.updateVolume(value)
  }
}

export default PlayerBar