import React from 'react'
import Form from 'react-bootstrap/Form';

function Select() {
  return (
    <Form.Select aria-label="Default select example" className="select">
      {/* <option>Open this select menu</option> */}
      <option value="1">EN</option>
      <option value="2">DE</option>
    </Form.Select>
  );
}

export default Select;