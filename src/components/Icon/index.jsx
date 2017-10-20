import React from 'react'

import './iconfont'

import styles from './index.styl'

const Icon = (props) => {
  const className = props.className ? [styles.icon, props.className].join(' ') : styles.icon

  return (
    <svg className={className} aria-hidden="true" onClick={props.onClick}>
      <use xlinkHref={"#icon-" + props.id}></use>
    </svg >
  )
}

export default Icon