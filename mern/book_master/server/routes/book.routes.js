import { Router } from 'express';
import bookController from '../controllers/Book.controller.js';

const router = Router()

router.route('/')
    .get(bookController.getAllBooks)
    .post(bookController.createBook)


router.route('/:id')
    .get(bookController.getBookById)
    .patch(bookController.updateBook)
    .delete(bookController.deleteBook)



export default router;