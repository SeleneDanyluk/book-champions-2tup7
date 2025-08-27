import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';

const BookItem = ({ title, author, rating, pageCount, imageUrl, available }) => {

  return (
    <Card style={{ width: '18rem' }} className="mx-3">
      <Card.Img variant="top" src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"} />
      <Card.Body>
        <div className="mb-2">
                    {available ?
                        <Badge bg="success">Disponible</Badge>
                        :
                        <Badge bg="danger">Reservado</Badge>
                    }
                </div>
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