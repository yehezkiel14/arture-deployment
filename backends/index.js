import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.js';
import jobRoutes from './routes/jobRoutes.js';
import './config/Db.js';  // Ensure the database is connected

dotenv.config();

console.log('JWT_SECRET:', process.env.JWT_SECRET);

const app = express();
app.use(bodyParser.json());

app.use('/', createProxyMiddleware({ target: 'http://localhost:5137', changeOrigin: true }));

// API routes
app.use('/auth', authRoutes);
app.use('/api', jobRoutes);  // Use job routes here

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is running`));

