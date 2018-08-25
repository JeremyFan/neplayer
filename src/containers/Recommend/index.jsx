import React from 'react'
import Background from '../../components/Background'
import RedSongs from './RedSongs'
import styles from './index.styl'

const Recommend = () => (
  <div className={styles.recommend}>
    <RedSongs />
    <Background />
  </div>
)

export default Recommend