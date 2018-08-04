import React from 'react'
import PropTypes from 'prop-types'

export default function Handle({
  domain: [min, max],
  handle: { id, value, percent },
  getHandleProps,
}) {
  return (
    <div
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      style={{
        left: `${percent}%`,
        position: 'absolute',
        marginLeft: '-5px',
        marginTop: '-5px',
        zIndex: 2,
        width: 12,
        height: 12,
        cursor: 'pointer',
        borderRadius: '50%',
        backgroundColor: '#eee',
      }}
      {...getHandleProps(id)}
    />
  )
}

Handle.propTypes = {
  domain: PropTypes.array.isRequired,
  handle: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
  }).isRequired,
  getHandleProps: PropTypes.func.isRequired,
}