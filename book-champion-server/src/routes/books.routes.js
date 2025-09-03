import { Router } from "express";
import { Book } from "../models/Book.js";

//Estas son las rutas o controladores de Book, las cuales "habilitamos" para que se puedan comunicar con nuestro servidor. 
const router = Router();

router.get("/books", async (req, res) => {
    const books = await Book.findAll();
    res.json(books);
});

router.get("/books/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Libro con id: ${id}`);
});

router.post("/books", (req, res) => {
    res.send("Creando libro...");
});

router.delete("/books/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Eliminando libro con id: ${port}`);
});

export default router