import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

const Scrollbar = (props) => (
  <Scrollbars
    style={{ width: 'auto', height: '100%' }}
    autoHide
    {...props}
  />
)

export default Scrollbar