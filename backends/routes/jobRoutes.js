import express from 'express';
import { createJob, getAllJobs, updateJob, deleteJob } from '../controllers/jobController.js';
import multer from 'multer';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/jobs', upload.single('logo'), createJob);
router.get('/jobs', getAllJobs);
router.put('/jobs/:id', upload.single('logo'), updateJob);
router.delete('/jobs/:id', deleteJob);

export default router;
