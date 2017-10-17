import React from 'react'

import styles from './index.styl'
import { getDuration } from '../../util'


const Song = props => {
  const arNames = props.ar.map(ar => ar.name)

  const liClassName = props.isActive ? [styles.song, styles.active].join(' ') : styles.song

  return (
    <li className={liClassName} onClick={props.onClick}>
      <div className={styles.songIndex}>{props.index + 1 + '.'}</div>
      <div className={styles.songInfo}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.more}>
          <span className="artist">{arNames.join('/')}</span>
          <span className={styles.split}>·</span>
          <span className="album">{props.al.name}</span>
        </div>
      </div>
      <div className={styles.songDuration}>{getDuration(props.dt)}</div>
    </li>
  )
}

export default Song