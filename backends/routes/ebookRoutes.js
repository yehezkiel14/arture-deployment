import express from 'express';
import { addEbook } from '../controllers/ebookController.js';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' }); // Setup multer untuk upload file

const router = express.Router();

router.post('/', upload.single('file'), addEbook);

export default router;
