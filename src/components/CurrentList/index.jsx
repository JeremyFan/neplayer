/**
 * @file 正在播放列表
 */

import React from 'react'

import Album from './Album'
import Artist from './Artist'
import UserList from './UserList'
import styles from './index.styl'

import { getPublishYear, getPicUrl } from '../../util'

const CurrentList = props => {
  const picUrl = getPicUrl(props.picUrl, 240)

  let info = <Album {...props.info} />
  if (props.type === 'userlist') {
    info = <UserList {...props.info} />
  } else if (props.type === 'artist') {
    info = <Artist {...props.info} />
  }
  
  return (
    <div className={styles.currentList}>
      <img src={picUrl} />
      {info}
    </div>
  )
}

export default CurrentList