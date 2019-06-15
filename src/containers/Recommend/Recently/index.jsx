import React, { Component } from 'react'
import Scrollbar from 'components/Scrollbar'
import config from './config'

import styles from './index.styl'

class Recently extends Component {
  render() {
    return (
      <div className={styles.page}>
        <Scrollbar>
          {
            config.map(recommend => (
              <section className={styles.sec}>
                <h2>{recommend.type}</h2>
                <ul>
                  {recommend.data.map(item => (
                    <li>
                      <img src={item.picUrl} alt={item.title}></img>
                      <p>{item.title}</p>
                    </li>
                  ))}
                </ul>
              </section>
            ))
          }
        </Scrollbar>
      </div>
    )
  }
}

export default Recently