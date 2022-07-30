import React from 'react'

function Podfeatures(props) {
  return (
    <div className="container d-flex align-items-center p-0">
        <img src={props.src} alt={props.alt} className="podfeaturesimg" />
        <p className="podfeaturestext">{props.text}</p>
    </div>
  )
}

export default Podfeatures