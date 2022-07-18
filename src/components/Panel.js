import React from 'react'

function Panel(props) {
  return (
    <div className={`panel ${ props.cClassName }`}>{props.text}</div>
  )
}

export default Panel