import React from 'react'

import Banner from './Banner2.js'
import Carousel from './CustomCarousel.js'
import TextPhoto from "./TextPhoto.js";

import photo1 from '../assets/1.png'
import photo2 from '../assets/2.png'
import photo3 from '../assets/3.png'
import photo4 from '../assets/4.png'
import photo5 from '../assets/5.png'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Products() {
  return (
    <div>
        <Banner text={['', 'Exclusive print-on-demand products', 'Choose from 300+ articles for your motifs']} />
        <Carousel />
        <div className='container ourOffers'>
          <div className="productList">
            <Banner text={['', <> Special products and printing  <br /> processes</>, 'We do magic']} cClassName={"m-0 mb-5 text-start"}/>

            <div className='list'>
              <TextPhoto smallTitle={'DTG Printing'} paragraph={'With DTG printing, your design is printed directly onto the garment. You can add all kinds of colorful prints to garments such as T-shirts, hoodies, and sweatshirts.'} img={photo1} index={'01'} cClassName={"textphotofeatures"}/>
              <TextPhoto smallTitle={'Sublimation Printing'} paragraph={'With sublimation printing, your design covers the entire product. Your artwork is printed on a finished product, such as a mug, mobile phone cover, cushion, or poster.'} img={photo2} index={'02'} cClassName={"textphotofeatures"}/>
              <TextPhoto smallTitle={'Digital Foil Printing'} paragraph={'Impress your customers with digital foil printing products that will delight them. Perfect products for foil printing are postcards, posters, cushions, t-shirts, and more.'} img={photo3} index={'03'} cClassName={"textphotofeatures"}/>
              <TextPhoto smallTitle={'Embroidery'} paragraph={'Your design is embroidered onto a garment or accessory using colored threads. Use this technique to add texture to your design. Applicable on all products made of fabric.'} img={photo4} index={'04'} cClassName={"textphotofeatures"}/>
              <TextPhoto smallTitle={'Engraving'} paragraph={'This technique engraves your design on sterling silver, gold, or brass. Create an elegant jewelry line for your business.'} img={photo5} index={'05'} cClassName={"textphotofeatures"}/>
            </div>
          </div>


            <Container className="product-features">
                <Row>
                  <Col md={6} xs={12} className="title p-0">
                    With our public Shopify app, merchants can have their orders processed in just a few minutes.
                  </Col>
                  <Col md={6} xs={12} className="list p-0">
                      <h1>Features of the app</h1>
                      <div>
                        <p>Pulling print files generated with Shopify's most popular customizer apps</p>
                        <p>Order information is sent directly to the printing company</p>
                        <p>Integrated system to recreate broken orders</p>
                        <p>Automatic fulfillment with tracking in Shopify</p>
                        <p>Subsequent editing of the order</p>
                        <p>Cost overview and direct payment connection</p>
                      </div>
                  </Col>
                </Row>
            </Container>

        </div>

        
    </div>
  )
}

export default Products