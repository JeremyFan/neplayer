import React from 'react'

import './iconfont'
import styles from './index.styl'

const Icon = (props) => (
  <svg className={styles.icon} aria-hidden="true">
    <use xlinkHref={"#icon-" + props.id}></use>
  </svg>
)

export default Icon