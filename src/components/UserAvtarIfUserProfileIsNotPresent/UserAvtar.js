import React from 'react'
import "./userAvtar.css"

const UserAvtar = (props) => {
  return (
    <div data-label="DA" style={{
        width: props.width,
        height: props.height,
        fontSize: props.fontSize,
        backgroundColor: props.backgroundColor
    }} className="avtar"></div>
  )
}

export default UserAvtar