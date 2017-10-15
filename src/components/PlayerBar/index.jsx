/**
 * @file 底部播放条
 */

import React, { Component } from 'react'

import styles from './index.styl'

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
          <img className={styles.pic} src={song.al.picUrl} />
          <div className={styles.title}>{song.name}</div>
          <div className={styles.desc}>{ar.join('/')}</div>
        </div>
      </div>
    )
  }

}

export default PlayerBar