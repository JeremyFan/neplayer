import React from 'react'

import Background from '../../components/Background'
import styles from './index.styl'

const Home=()=>(
  <div className={styles.home}>
    <div className={styles.logo}>NEPlayer</div>
    <Background />
  </div>
)

export default Home