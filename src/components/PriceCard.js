import React from 'react'


import Zip from '../assets/zip_grey.png'
import Check from '../assets/check.png'

function PriceCard({header, subtitle, description, banner, featureList, cClasName}) {
  return (
    <div className={`priceCardContainer ${cClasName}`}>
        <div className="header">
            <h1>{header}</h1>
            <h3>{subtitle}</h3>
        </div>
        <p className="description">{description}</p>
        <div className="banner">
            <button className='btn btn-primary'>Contact</button>
            <div>
                <img src={Zip} alt="zip" width="16" height="20" />
                <p>{banner}</p>
            </div>
        </div>

        <p className='featureBanner'>Feature for customers</p>

        <ul>
            {
                featureList.map((item,i) => {
                    return <li key={i}> <img src={Check} alt="check" /> {item}</li>
                })
            }
        </ul>
    </div>
  )
}

export default PriceCard