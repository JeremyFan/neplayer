import React from 'react'

import { getPublishYear } from '../../util'
import styles from './index.styl'

const Album = props => {
  const arNames = props.artists.map(artist => artist.name)
  const publishYear = getPublishYear(props.publishTime)

  return (
    <div>
      <div className={styles.title}>{props.name}</div>
      <div className={styles.desc}><span>By</span> {arNames.join('/')} · {publishYear}</div>
    </div>
  )
}

export default Album
