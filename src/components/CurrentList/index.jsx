/**
 * @file 正在播放列表
 */

import React from 'react'
import styles from './index.styl'

import { getPublishYear, getPicUrl } from '../../util'

const CurrentList = props => {

  const arNames = props.album.artists.map(artist => artist.name)
  const publishYear = getPublishYear(props.album.publishTime)
  const picUrl = getPicUrl(props.album.picUrl, 240)

  return (
    <div className={styles.currentList}>
      <img src={picUrl} />
      <div className={styles.alName}>{props.album.name}</div>
      <div className={styles.arName}><span>By</span> {arNames.join('/')} · {publishYear}</div>
    </div>
  )
}

export default CurrentList