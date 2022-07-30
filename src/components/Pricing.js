import React from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import FAQBanner from './Banner2.js'
import PriceCard from './PriceCard.js'

function Pricing({ title, forWho }) {
  return (
    <div className="container">
      <FAQBanner text={[title, 'Price table', 'Do you have hany question you can search it here']} />


      {
        forWho === 'companies' &&
        <Tabs
          defaultActiveKey="monthly"
          id="uncontrolled-tab-example"
          className="px-0 justify-content-center mytab companytab"
        >
          <Tab eventKey="monthly" title="MONTHLY BILL">
            <div className="d-flex justify-content-center flex-wrap companiesCard" style={{'gridGap': `15px`}}>
              <PriceCard header={'Free'} subtitle={<>Beginner Package <br /> Free of charge</>} description={<>Up to 5 POD <br /> customers </>} banner={<>Up to 10h <br /> support/month included</>} featureList={['Service this', 'Service this']} />
              <PriceCard cClasName={"bestSeller"} header={'150€'} subtitle={<>Advanced Package <br /> Month</>} description={<>6 - 15 POD <br /> customers </>} banner={<>Up to 20h <br /> support/month included</>} featureList={['Service this', 'Service this']} />
              <PriceCard header={'300€'} subtitle={<>VIP Package <br /> Month / 1,0% usage fee</>} description={<>Over 15 POD <br /> customers </>} banner={<>Up to 40h <br /> support/month included</>} featureList={['Service this', 'Service this']} />
          
            </div>
          </Tab>
          <Tab eventKey="annual" title="ANNUAL BILL" className="save companiesCard">
            <div className="d-flex justify-content-between flex-wrap">
              annual company cards ???
            </div>
          </Tab>
        </Tabs>
      }
      {
        forWho === 'merchants' &&
        <Tabs
          defaultActiveKey="monthly"
          id="uncontrolled-tab-example"
          className="px-0 justify-content-center mytab"
        >
          <Tab eventKey="monthly" title="MONTHLY BILL" >
            <div className="d-flex justify-content-between flex-wrap">
              <PriceCard header={'Free'} subtitle={'Starter'} description={'Recommended for up to 10 orders per month'} banner={'Upgrade your plan for better future for your company'} featureList={['Service this', 'Service this']} />
              <PriceCard header={'19,99€'} subtitle={<>S plan <br />  Month / 1,5% usage fee</>} description={'Recommended for up to 50 orders per month'} banner={'Upgrade your plan for better future for your company'} featureList={['Service this', 'Service this', 'Service this', 'Service this']} />
              <PriceCard cClasName={"bestSeller"} header={'24,99€'} subtitle={<>M plan <br />  Month / 1,0% usage fee</>} description={'Recommended for up to 150 orders per month'} banner={'Upgrade your plan for better future for your company'} featureList={['Service this', 'Service this', 'Service this', 'Service this']} />
              <PriceCard header={'29,99€'} subtitle={<>M plan <br />  Month / 0,7% usage fee</>} description={'Recommended for up to 250 orders per month'} banner={'Upgrade your plan for better future for your company'} featureList={['Service this', 'Service this', 'Service this', 'Service this']} />
            </div>
          </Tab>
          <Tab eventKey="annual" title="ANNUAL BILL" className="save">
            <div className="d-flex justify-content-between flex-wrap">
              <PriceCard header={'annual 1'} subtitle={<>M plan <br />  Month / 1,0% usage fee</>} description={'Recommended for up to 150 orders per month'} banner={'Upgrade your plan for better future for your company'} featureList={['Service this', 'Service this', 'Service this', 'Service this']} />
              <PriceCard header={'annual 2'} subtitle={<>M plan <br />  Month / 0,7% usage fee</>} description={'Recommended for up to 250 orders per month'} banner={'Upgrade your plan for better future for your company'} featureList={['Service this', 'Service this', 'Service this', 'Service this']} />
            </div>
          </Tab>
        </Tabs>
      }


    </div>
  )
}

export default Pricing