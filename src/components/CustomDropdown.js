import React,  { useEffect, useState, useRef } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

let url = 'https://graphql.country/graphql'






function CustomDropdown() {
  const optionContent = useRef()
    const [ country, setCountry ] = useState([])

    useEffect(() => {
       
    fetch(url, {
      method: 'POST', 
      headers: { "Content-Type" : "application/json"},
      body: JSON.stringify({
        query: `
        {
          countries {
            edges {
              node {
                name
                callingCodes
                flag
              }
            }
          }
        }
        `
      })
    })
    .then(res => res.json())
    .then(data => setCountry(data.data.countries.edges))

    }, [])

 
   
  return (
    <>
      <InputGroup className="mb-3 bg-white">
        <DropdownButton
          variant="outline-secondary"
          title="code"
          id="input-group-dropdown-1"
          ref={optionContent}
        >
          {
            country.length >= 1 ? 
              country.map((country, i) => {
              
                return <Dropdown.Item key={i} 
                        className="dropDownitem justify-content-between"   
                onClick={(e)=> {
                  let el = document.querySelector('#input-group-dropdown-1')
                  let el2 = e.target.innerText
                  el2 = el2.split(' ')
                  el.innerText = el2[0]
                 
                }}>
                        
                          <h6>  {"+"}{country.node.callingCodes[0]} {country.node.name}</h6>
                          <img src={country.node.flag} width="30" height="20" alt="country_flag"/>
                      </Dropdown.Item>
              })
            : ''
          }
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" placeholder='Your number'/>
      </InputGroup>

    </>
  );
}

export default CustomDropdown;
