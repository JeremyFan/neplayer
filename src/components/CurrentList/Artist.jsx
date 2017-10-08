import React from 'react'

import styles from './index.styl'

const Artist = props => (
  <div className={styles.title}>{props.name}的热门歌曲</div>
)

export default Artist