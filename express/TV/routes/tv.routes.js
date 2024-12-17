import { Router } from 'express';
import tvController from '../controllers/tv.controller.js';

const router = Router()

router.route('/')
    .get(tvController.getAlltvs)

router.route('/:id')
    .get(tvController.getByYear)
    .patch(tvController.UpdateByTitle)
    .delete(tvController.deleteTV)

export default router;