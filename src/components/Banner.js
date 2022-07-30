import React from 'react'

function Banner(props) {
  return (
    <div className={`banner ${props.cClassName}`}>
      {
        props.title && <h1>{props.title}</h1>
      }
      {
        props.smallTitle && <h3>{props.smallTitle}</h3>
      }
      {
        props.paragraph && <p>{props.paragraph}</p>
      }

    </div>
  )
}

export default Banner