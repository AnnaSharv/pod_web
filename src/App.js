import React from 'react';
import { Routes, Route } from "react-router-dom";
import './styles/reset.css';
import './styles/App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';



//pages
import LandingPage from './pages/LandingPage';
import Merchants from './pages/Merchants';
import Companies from './pages/Companies';


//components
import Navbar from './components/Navbar'; 
import Footer from './components/Footer.js'; 

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/merchants" element={<Merchants />}/>
          <Route path="/companies" element={<Companies />}/>
        </Routes>
      <Footer 
        cClassName="customFooter"
        ourPages = {[
          'Our Pages',
          'Merchant',
          'Printing Company',
          'About Us',
          'Contact',
          'DOCUMENTATION'
        ]}
        innerPagesMerchant = {[
          'Inner Pages',
          'Merchant Products',
          'Merchant FAQ',
          'Merchant Pricing',
          'Merchant Contact',
          'PRIVACY & POLICY'
        ]}
        innerPagesCompany ={[
          ' ',
          'Printing Company Products',
          'Printing Company FAQ',
          'Printing Company Pricing',
          'Printing Company Contact',
          '  '
        ]}
        socialsPages= {[
          'Social Pages',
          'Facebook',
          'LinkedIn',
          'Twitter',
          ' ',
          ' '
        ]}
      />
    </div>
  );
}

export default App;
