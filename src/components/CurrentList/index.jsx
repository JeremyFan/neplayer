/**
 * @file 正在播放列表
 */

import React from 'react'
import styles from './index.styl'

const CurrentList = props => (
  <div className={styles.currentList}>
    <img src="http://p3.music.126.net/Eo1m0dBH77rhvvAqUwVxKQ==/6644348767578000.jpg" />
    <p className={styles.alName}>London Calling</p>
    <p className={styles.arName}>the Clash</p>
    <p></p>
  </div>
)

export default CurrentList