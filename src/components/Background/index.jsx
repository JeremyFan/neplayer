import React from 'react'

import styles from './index.styl'

const Background = props => (
  <div className={styles.greatBg}>
    <img className={styles.bgImage} src={props.imgUrl} />
    <div className={styles.bgGradient}></div>
  </div>
)
export default Background