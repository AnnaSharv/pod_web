import React from 'react'

import Panel from './Panel.js'
import Banner from './Banner.js'
import Card from './Card.js'
import ExampleImg from '../assets/photo_data.png'
import AboutUs from './AboutUs.js'




function SectionInfo() {
  return (
    <div className="sectionInfo">
        <div className="container">
            <Panel text={"Podsolutionshopify Platform"} cClassName="panelInfo" />
             <Banner title={<>Lets look at what <br /> we can offer you</>} paragraph={<>Explore the core functionality of <br /> the our platform</>} cClassName="aboutUsBanner"/> 
            <div className="flexButtons flexButtonsInfo">
                <Card title={"For Shopify Merchants"} paragraph={"Find the right print-on-demand printing company for your shop in minutes. With our fully automated app, you can get started immediately with just a few clicks and no minimum order quantity. Extraordinary products and printing methods at fair prices."} img={ExampleImg} />
                <Card title={"For Printing Companies"} paragraph={"With our fully automated app, we connect small to medium-sized printing companies with existing and new Shopify merchants. We offer clear and easy access to the print files of individual orders and automatic input of tracking information with the most common shipping providers."} img={ExampleImg} />
            </div>


            <AboutUs />
        </div>
    </div>
  )
}

export default SectionInfo