import React from 'react'
import Card from 'react-bootstrap/Card';

const BookItem = ({ title, author, rating, pageCount, imageUrl }) => {

  return (
    <Card style={{ width: '18rem' }} className="mx-3">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
        <Card.Text>
          {rating} Estrellas 
        </Card.Text>
        <Card.Text>
          {pageCount} Páginas
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default BookItem