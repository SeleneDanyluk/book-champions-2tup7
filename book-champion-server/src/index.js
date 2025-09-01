import express from 'express'
import booksRoutes from './routes/books.routes.js'
import { PORT } from './config.js';

const app= express();

app.listen(PORT);
app.use(booksRoutes);

console.log(`Server listening on port ${PORT}`);