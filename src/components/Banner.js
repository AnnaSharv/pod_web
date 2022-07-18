import React from 'react'

function Banner(props) {
  return (
    <div className={`banner ${ props.cClassName }`}>
        <h1>{props.title}</h1>
        <p>{props.paragraph}</p>
    </div>
  )
}

export default Banner