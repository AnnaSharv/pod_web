import React from 'react'
import { Routes, Route } from 'react-router-dom';

//components


import Navbar from '../components/Navbar.js'; 

import MerchantsLP from '../components/MerchantsLP.js'
import Products from '../components/Products.js'
import FAQ from '../components/FAQ.js'
import Pricing from '../components/Pricing.js'
import Contact from '../components/Contact.js'




import ContactShort from '../components/ContactShort.js'

function Merchants(props) {
  return (
    <div>
    <Navbar navLinks={props.navLinks} cClassName={"nofixednav"}/>

    <Routes>
        <Route path="/" element={<MerchantsLP />} />
        <Route path="Products" element={<Products/>} />
        <Route path="FAQ" 
          element={<FAQ 
            title={"For Shopify Merchants"}
            questions={[
            'How can I get started?',
            'What payment methods are available?',
            'Can I print my logo on the packages?',
            'Is there a minimum order quantity?',
            'How long does the shipping take?',
            'What happens if an order is delivered wrong or broken? ?',
            'What happens if the customer has entered a wrong address??',
            'How do I send the print files to the printer??',
            'Do I have to enter the shipment information manually??'
          ]}
          
          answers={[
            'Install our Shopify app (LINK TO SHOPIFY APP STORE) in your store and you are ready to go. ',
            'Hello world'
          ]}
          />} 
          />
        <Route path="Pricing" element={<Pricing  title={"For Shopify Partners"} forWho={"merchants"} />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>



       
    <ContactShort />

    
    
    </div>
  )
}

export default Merchants