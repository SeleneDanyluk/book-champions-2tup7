import Card from 'react-bootstrap/Card';
import { Badge, Button } from 'react-bootstrap';
import { Star, StarFill } from "react-bootstrap-icons";
import { useNavigate } from 'react-router';

const BookItem = ({ id, title, author, rating, pageCount, summary, imageUrl, available, onDeleteBook }) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`${id}`, {
      state: {
        book: {
          title,
          author,
          rating,
          pageCount,
          summary,
          imageUrl,
          available,
        },
      },
    })
  }

  const handleDeleteBook = () => {
    onDeleteBook(id, title);
  }

  const ratingStars = Array.from({ length: 5 }, (_, index) =>
    index < rating ? <StarFill key={index} /> : <Star key={index} />
  );

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
          {ratingStars} Estrellas
        </Card.Text>
        <Card.Text>
          {pageCount} Páginas
        </Card.Text>
        <Button variant="danger" className="me-4" onClick={handleDeleteBook}>
          Eliminar libro
        </Button>
        <Button className="me-4" onClick={handleClick}>
          Seleccionar libro
        </Button>
      </Card.Body>
    </Card>
  )
}

export default BookItem