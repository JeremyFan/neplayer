import React from 'react'

import Icon from '../Icon'
import styles from './index.styl'
import { getDuration } from '../../util'


const Song = props => {

  const { index, ar, al, name, dt, isActive, isOffline, playing } = props

  const arNames = ar.map(ar => ar.name)

  const liClass = [styles.song]
  if (isActive) liClass.push(styles.active)
  if (isOffline) liClass.push(styles.offline)

  return (
    <li className={liClass.join(' ')} onClick={props.onClick}>
      <div className={styles.songIndex}>
        <span className={styles.index}>{index + 1 + '.'}</span>
        {!isOffline && <Icon id={isActive && playing ? "pause" : "play"} className={styles.play} />}
      </div>
      <div className={styles.songInfo}>
        <div className={styles.name}>{name}</div>
        <div className={styles.more}>
          <span className="artist">{arNames.join('/')}</span>
          <span className={styles.split}>·</span>
          <span className="album">{al.name}</span>
        </div>
      </div>
      <div className={styles.songDuration}>{getDuration(dt)}</div>
    </li>
  )
}

export default Song