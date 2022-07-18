import React from 'react'
import Button from 'react-bootstrap/Button';

import '../styles/style.css'
function CustomButton(props) {
  return (
    <div className="lpButtonContainer">
        <Button  className={` ${ props.cClassName }`}>{props.text}</Button>
    </div>
  )
}

export default CustomButton

