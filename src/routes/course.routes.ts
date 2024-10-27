import Router from 'express-promise-router';
import courseController from '../controllers/course.controller';

const router = Router();


router.post('/courso', courseController.createCurso);

export default router;