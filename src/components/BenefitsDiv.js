import React from 'react'

function BenefitsDiv(props) {
  return (
    <div className="benefitsDiv">
      {
        props.img && <img alt={props.alt} src={props.src} />
      }
        <h3>{props.title}</h3>
        <p>{props.paragraph}</p>
    </div>
  )
}

export default BenefitsDiv