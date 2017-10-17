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
  }

  render() {
    const { song } = this.props

    if (!song) return null

    const ar = song && song.ar.map(a => a.name)
    return (
      <div className={styles.bar}>
        <div className={styles.info}>
          <img className={styles.pic} src={getPicUrl(song.al.picUrl, 70)} />
          <div className={styles.title}>{song.name}</div>
          <div className={styles.desc}>{ar.join('/')}</div>
        </div>
        <div className={styles.controls}>
          <Icon className={styles.play} id="play" />
          <Icon className={styles.pause} id="pause" />
          <Icon id="volume" />
        </div>
      </div>
    )
  }

}

export default PlayerBar