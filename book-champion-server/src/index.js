import express from 'express'
import booksRoutes from './routes/books.routes.js'
import { PORT } from './config.js';
import { sequelize } from "./db.js";

const app = express();

try {
    app.listen(PORT);
    app.use(express.json());
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        next();
    });
    app.use(booksRoutes);

    await sequelize.sync();

    console.log(`Server listening on port ${PORT}`);
} catch (error) {
    console.log(`Ocurrio un error en la inicialización.`);
}