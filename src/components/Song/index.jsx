import React from 'react'

import { SITE_URL } from 'constants'
import Icon from '../Icon'
import styles from './index.styl'
import { getDuration } from '../../util'


const Song = props => {

  const { index, ar, al, name, dt, isActive, isOffline, playing } = props

  const arNames = ar
    .map(ar => (
      <a
        key={ar.id}
        target="_blank"
        href={`${SITE_URL}/#/artist?id=${ar.id}`}
        onClick={e => e.stopPropagation()}
      >
        {ar.name}
      </a>
    ))
    .reduce((prev, curr) => [prev, ' / ', curr])

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
          <span className={styles.artist}>
            {arNames}
          </span>
          <span className={styles.split}>·</span>
          <span className={styles.album}>
            <a
              target="_blank"
              href={`${SITE_URL}/#/album?id=${al.id}`}
              onClick={e => e.stopPropagation()}>{al.name}
            </a>
          </span>
        </div>
      </div>
      <div className={styles.songDuration}>{getDuration(dt)}</div>
    </li>
  )
}

export default Song