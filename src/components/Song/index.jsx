import React from 'react'

import styles from './index.styl'

const Song = props => {
  const arNames = props.ar.map(ar => ar.name)

  return (
    <li className={styles.song} onClick={props.onClick}>
      <div className={styles.songIndex}>{props.index+1+'.'}</div>
      <div className={styles.songInfo}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.more}>
          <span className="artist">{arNames.join('，')}</span>
          <span className={styles.split}>·</span>
          <span className="album">{props.al.name}</span>
        </div>
      </div>
      <div className={styles.songDuration}>{props.dt}</div>
    </li>
  )
}

export default Song