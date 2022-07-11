import { Router } from 'express';
const router = Router();
import examController from '../../controllers/exam/exam-controller.js';

router.get('/', examController.test);

export default router;
