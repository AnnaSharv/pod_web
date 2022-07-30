import React from 'react'


import Banner from '../components/Banner.js'; 
import Button from '../components/CustomButton.js'
import TextPhoto from '../components/TextPhoto.js'
import Benefits from '../components/Benefits'
import Podfeatures from '../components/Podfeatures.js'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import ExampleImg from '../assets/photo_data.png';
import ShopifyLogo from '../assets/logo_shopify.png';
import Zip from '../assets/zip.png';

function MerchantsLP() {
  return (
    <div>
          <Container className="my-5 merchantlp">
        <Row >
          <Col md={6} xs={12}>
            <Banner 
            cClassName="merchantBanner"
              title={ <>Starting a print-on-demand <br /> business has never been easier </>} 
              paragraph={"Your time is precious, thanks to PODsolutions you now have more time to scale your business. With our revolutionary interface, we take care of your orders with automatic full-file processing. "}
            />

            <div className="flexButtons merchantButton">
              <Button text={"Get in touch"} cClassName={"lpButton "} />
            </div>

            <div className="aboutUsInfo ">
                <div>We work <br/> Different platforms</div>
                <div><img src={ShopifyLogo} alt="Shopify_logo"/></div>
            </div>
          </Col>

          <Col md={6} xs={12} className="d-flex justify-content-end">
            <img alt="diagram" src={ExampleImg} className="diagram" />
          </Col>
        </Row>

      </Container>

    <div className='container textphotoContainer'>
          <TextPhoto 
            smallTitle="You are an entrepreneur and want unique products at decent prices?" 
            paragraph="Due to the pandemic in 2019, there has been an unprecedented boom in the POD industry, but despite the high demand, there are still only a few POD providers as of 2022, which not only all offer similar products, but are also priced very high. With PODsolutions, we are revolutionizing the market with exclusive products and affordable prices."
            cClassName={"photoRev"}
          />
          <TextPhoto 
            cClassName="textphotoReverse"
            smallTitle="We help you get started quickly thanks to an uncomplicated connection without minimum order quantities." 
            paragraph="PODsolutions is dedicated to making it as easy as possible for anyone to get started with print on demand. With our Shopify App, Shopify Merchants can get started immediately with just a few clicks and choose from a huge, worldwide network of Print on Demand printing companies. Discover exclusive products that are not yet available on the market and find the perfect POD partner for your business. With us you will find outstanding products at competitive prices. "
          />
    </div>

    <Benefits />

    <div className="PodfeaturesContainer">
      <h1>Features of the PODsolutions APP</h1>

      <Container>
        <Row>
          <Col md={6} xs={12} className="p-0">
            <Podfeatures src={Zip} text="Automatic sending of all order information to the printing company" alt="automatic_send" />
          </Col>
          <Col md={6} xs={12} className="p-0">
            <Podfeatures src={Zip} text="Manual adjustment of order information if required" alt="manual_adjustment" />
          </Col>
          <Col md={6} xs={12} className="p-0">
            <Podfeatures src={Zip} text="Automatic fulfillment with tracking in Shopify" alt="automatic_fullfilment_with_tracking" />
          </Col>
          <Col md={6} xs={12} className="p-0">
            <Podfeatures src={Zip} text="Uncomplicated handling of defective deliveries" alt="easy_handling" />
          </Col>
          <Col md={6} xs={12} className="p-0">
            <Podfeatures src={Zip} text="Manual adjustment of print files if required" alt="manual_adjustment_of_printfiles" />
          </Col>
          <Col md={6} xs={12} className="p-0">
            <Podfeatures src={Zip} text="Cost overview and integrated payment processing" alt="integrated_payment_processing" />
          </Col>
        </Row>
      </Container>
    </div>


    </div>
  )
}

export default MerchantsLP