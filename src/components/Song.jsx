import React from 'react'

const Song = song => {
  const arNames = song.ar.map(ar => ar.name)

  return (
    <div>
      <span>{song.name}</span>
      <span>{arNames.join('，')}</span>
      <span>《{song.al.name}》</span>
    </div>
  )
}

export default Song