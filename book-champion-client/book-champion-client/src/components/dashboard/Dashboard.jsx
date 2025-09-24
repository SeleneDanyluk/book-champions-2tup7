import { useState, useEffect } from 'react';
import NewBook from '../newBook/NewBook';
import Books from '../books/Books';
import { Button, Col, Row } from "react-bootstrap";
import { Route, Routes, useNavigate } from 'react-router';
import BookDetails from '../bookDetails/BookDetails';


const Dashboard = ({ onLogout }) => {

    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/books')
            .then(response => response.json())
            .then(data => setBooks([...data]))
            .catch(error => console.log(error));
    }, [])

    const handleDeleteBook = (id) => {
        console.log("eliminado.")
    }

    const handleNavigateAddBook = () => {
        navigate("add-book");
    }

    const handleBookAdded = (enteredBook) => {
        fetch("http://localhost:3000/books", {
            headers: {
                "Content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(enteredBook)
        })
            .then(response => response.json())
            .then(data => setBooks(prevBooks => [data, ...prevBooks]))
            .catch(error => console.log(error))

    }

    return (
        <>
            <Row className="w-100 my-3">
                <Col />
                <Col md={3} className="d-flex justify-content-end ">
                    <Button className="me-3" variant="success" onClick={handleNavigateAddBook}>Agregar libro</Button>
                    <Button onClick={onLogout}>Cerrar sesión</Button>
                </Col>
            </Row>
            <h2>Book champions app</h2>
            <p>¡Quiero leer libros!</p>
            <Routes>
                <Route index element={<Books books={books} onDeleteBook={handleDeleteBook} />} />
                <Route path=":id" element={<BookDetails />} />
                <Route path="add-book" element={<NewBook onBookAdded={handleBookAdded} />} />
            </Routes>
        </>
    )
};

export default Dashboard