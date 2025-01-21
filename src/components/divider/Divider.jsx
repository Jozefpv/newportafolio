import React from 'react'
import './Divider.css'

const Divider = ({ side }) => {
  return (
    <>
      {side ? (
        <div className="dividerContainerRight"></div>
      ) : (
        <div className="dividerContainerLeft"></div>
      )}
    </>
  )
}

export default Divider
