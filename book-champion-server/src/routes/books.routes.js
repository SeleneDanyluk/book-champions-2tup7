import { Router } from "express";
import { Book } from "../models/Book.js";
import { or } from "sequelize";

//Estas son las rutas o controladores o endpoint de Book, las cuales "habilitamos" para que se puedan comunicar con nuestro servidor. 
const router = Router();

router.get("/books", async (req, res) => {
    const books = await Book.findAll();
    res.json(books);
});

router.get("/books/:id", async (req, res) => {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) {
        res.status(404).send({ message: "El libro no fue encontrado." })
    };

    res.json(book);
});


router.post("/books", async (req, res) => {
    const { title, author, rating, pageCount, summary, imageUrl, available } = req.body;

    if (!title || !author) {
        res.status(400).send({ message: "El título y el autor son requeridos." })
    };

    const newBook = await Book.create({
        title,
        author,
        rating,
        pageCount,
        summary,
        imageUrl,
        available
    }
    );
    res.json(newBook);
});

router.put("/books/:id", async (req, res) => {
    const { id } = req.params;
    const { title, author, rating, pageCount, summary, imageUrl, available } = req.body;
    const book = await Book.findByPk(id);

    if (!book) {
        res.status(404).send({ message: "El libro no fue encontrado." });
    }

    const bookData = {
        title,
        author,
        rating,
        pageCount,
        summary,
        imageUrl,
        available
    }

    await book.update(bookData);

    res.send({message: "Libro actualizado con éxito."})
});

router.delete("/books/:id", async (req, res) => {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) {
        res.status(404).send({ message: "El libro no fue encontrado." })
    };

    book.destroy();
    res.send(`Eliminando libro con id: ${id}`);
});

export default router;