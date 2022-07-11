import { Router } from 'express';
const router = Router();
import examRouter from './exam/exam-route.js';

router.use('/exam', examRouter);

export default router;
