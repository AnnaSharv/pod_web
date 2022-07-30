import React from 'react'

function Banner2({text, cClassName}) {
  return (
    <div className={`banner2 ${cClassName}`}>
        <h6>{text[0]}</h6>
        <h1>{text[1]}</h1>
        <h5>{text[2]}</h5>
    </div>
  )
}

export default Banner2