import React from 'react'
import Card from 'react-bootstrap/Card'
import Tags from './Tags'

const MyCard = ({
  dogImage,
  dogName,
  dogDescription,
  colorBadge,
  textBadge,
}) => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={dogImage} />
        <Card.Body className="dogCard">
          <Card.Title>{dogName}</Card.Title>
          <Card.Text>{dogDescription}</Card.Text>
          <Tags colorBadge={colorBadge} textBadge={textBadge}></Tags>
        </Card.Body>
      </Card>
    </>
  )
}

export default MyCard
