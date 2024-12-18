import express from 'express';
import { addVideo } from '../controllers/videoController.js';

const router = express.Router();

router.post('/', addVideo);

export default router;
