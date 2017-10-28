import React from 'react'

import styles from './index.styl'
import { getPublishYear } from '../../util'

const Artist = props => {
  const createYear = getPublishYear(props.createTime)

  return (
    <div>
      <div className={styles.title}>{props.name}</div>
      {
        props.creator.nickname && createYear && <div className={styles.desc}><span>By</span> {props.creator.nickname} · {createYear}</div>
      }
    </div>
  )
}

export default Artist