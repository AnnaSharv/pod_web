import React from 'react'
import { Routes, Route } from 'react-router-dom';
//components
import Navbar from '../components/Navbar.js'; 



import CompaniesLP from '../components/CompaniesLP.js'
import Solutions from '../components/Solutions.js'
import FAQ from '../components/FAQ.js'
import Pricing from '../components/Pricing.js'
import Contact from '../components/Contact.js'

import ContactShort from '../components/ContactShort.js'
function Companies(props) {
  return (
    <div>
        <Navbar navLinks={props.navLinks} cClassName={"nofixednav"}/>

        <Routes>
            <Route path='/' element={<CompaniesLP />}  />
            <Route path='solutions' element={<Solutions />}  />
            <Route path='/FAQ'
             element={<FAQ
              title={"For Printing Companies"}
              questions={[
                'Is PODsolutions the right solution for my printing company?',
                'How big does my printing company have to be? ',
                'What products do I need to offer?',
                'Can I offer a minimum volume? ',
                'Do I have to be familiar with Shopify? ',
                'How do I communicate with customers? ',
                'How does the order process work? '
              ]}
              answers={[
                'Our solution is aimed at printing companies that want to expand their customer base with POD services.'
              ]}

             />}  />
            <Route path='/pricing' 
              element={<Pricing 
                          title={"For Printing Companies"}
                          forWho={"companies"} 
                          />} 
                        />
              <Route path="contact" element={<Contact />} />
        </Routes>


        <ContactShort />
    </div>
  )
}

export default Companies