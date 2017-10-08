import React from 'react'

import styles from './index.styl'
import { getPicUrl } from '../../util'

const Background = props => (
  <div className={styles.greatBg}>
    <img className={styles.bgImage} src={getPicUrl(props.imgUrl, 500)} />
    <div className={styles.bgGradient}></div>
  </div>
)
export default Background