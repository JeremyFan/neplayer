import React from 'react'

const Song = props => {
  const arNames = props.ar.map(ar => ar.name)

  return (
    <div onClick={props.onClick}>
      <span>{props.name}</span>
      <span>{arNames.join('，')}</span>
      <span>《{props.al.name}》</span>
    </div>
  )
}

export default Song