import React from 'react'
import Accordion from 'react-bootstrap/Accordion';



import FAQBanner from './Banner2.js'

function FAQ({questions, answers, title}) {
  return (
    <div>
      <FAQBanner text={[title, 'Frequently-asked questions', 'Do you have hany question you can search it here']}/>

      <Accordion className="container">
        {
          questions.map((question, i) => {
            return  <Accordion.Item eventKey={i} key={i} className="accordion-item">
                        <Accordion.Header>{question}</Accordion.Header>
                        <Accordion.Body>{answers[i]}</Accordion.Body>
                          
                    </Accordion.Item>
          })
        }
      </Accordion>

    </div>
  )
}

export default FAQ