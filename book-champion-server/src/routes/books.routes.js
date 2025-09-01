import { Router } from "express";

const router = Router();

router.get("/books", (req, res) => {
    res.send("Todos los libros...");
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