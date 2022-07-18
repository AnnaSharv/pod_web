import React from 'react'
import Card from 'react-bootstrap/Card';


import CustomButton from './CustomButton.js'
function CustomCard(props) {
  return (
    <Card  className="infoCard">
      <Card.Img variant="top" src={props.img} className="infoPhoto"/>
      <Card.Body  className="p-0">
        <Card.Title className="infoCardTitle">{props.title}</Card.Title>
        <Card.Text className="infoCardTitleP">
          {props.paragraph}
        </Card.Text>
        <CustomButton text={"To the Merchant Website"} cClassName={"lpButton infoButton"}/>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;