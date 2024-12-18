// // import express from 'express';
// // import bodyParser from 'body-parser';
// // import cors from 'cors';
// // import dotenv from 'dotenv';
// // import authRoutes from './routes/authRoutes.js';
// // import userRoutes from './routes/userRoutes.js';
// // import ebookRoutes from './routes/ebookRoutes.js';
// // import videoRoutes from './routes/videoRoutes.js';
// // import jobRoutes from './routes/jobRoutes.js';

// // dotenv.config();

// // const app = express();
// // const port = process.env.APP_PORT || 5000;

// // app.use(cors());
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: true }));

// // app.use('/api/auth', authRoutes);
// // app.use('/api/users', userRoutes);
// // app.use('/api/ebooks', ebookRoutes);
// // app.use('/api/videos', videoRoutes);
// // app.use('/api/jobs', jobRoutes);

// // // Route dasar
// // app.get('/', (req, res) => {
// //   res.send('Welcome to the Admin API');
// // });

// // app.listen(port, () => {
// //   console.log(`Server running on port ${port}`);
// // });

// import express from 'express';
// import mysql from 'mysql2';
// import cors from 'cors';
// import bodyParser from 'body-parser';

// const app = express();
// const port = 5000; 

// // Konfigurasi database
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root', 
//   password: '222444',
//   database: 'arture_db' 
// });

// db.connect(err => {
//   if (err) {
//     console.error('Error connecting to database: ', err);
//     return;
//   }
//   console.log('Connected to database');
// });

// app.use(cors());
// app.use(bodyParser.json());

// // Endpoint untuk Ebooks
// app.get('/ebooks', (req, res) => {
//   const sql = 'SELECT * FROM Ebooks';
//   db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.send(results);
//   });
// });

// app.post('/ebooks', (req, res) => {
//   const { Title, Author, Description, FilePath } = req.body;
//   const sql = `INSERT INTO Ebooks (Title, Author, Description, FilePath) VALUES (?, ?, ?, ?)`;
//   db.query(sql, [Title, Author, Description, FilePath], (err, result) => {
//     if (err) throw err;
//     res.send(result); 
//   });
// });

// app.put('/ebooks/:id', (req, res) => {
//   const { id } = req.params;
//   const { Title, Author, Description, FilePath } = req.body;
//   const sql = `UPDATE Ebooks SET Title = ?, Author = ?, Description = ?, FilePath = ? WHERE EbookID = ?`;
//   db.query(sql, [Title, Author, Description, FilePath, id], (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// app.delete('/ebooks/:id', (req, res) => {
//   const { id } = req.params;
//   const sql = `DELETE FROM Ebooks WHERE EbookID = ?`;
//   db.query(sql, [id], (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// // Endpoint untuk Videos
// app.get('/videos', (req, res) => {
//   const sql = 'SELECT * FROM Videos';
//   db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.send(results);
//   });
// });

// app.post('/videos', (req, res) => {
//   const { Title, Description, URL } = req.body;
//   const sql = `INSERT INTO Videos (Title, Description, URL) VALUES (?, ?, ?)`;
//   db.query(sql, [Title, Description, URL], (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// app.put('/videos/:id', (req, res) => {
//   const { id } = req.params;
//   const { Title, Description, URL } = req.body;
//   const sql = `UPDATE Videos SET Title = ?, Description = ?, URL = ? WHERE VideoID = ?`;
//   db.query(sql, [Title, Description, URL, id], (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// app.delete('/videos/:id', (req, res) => {
//   const { id } = req.params;
//   const sql = `DELETE FROM Videos WHERE VideoID = ?`;
//   db.query(sql, [id], (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// // Endpoint untuk Jobs
// app.get('/jobs', (req, res) => {
//   const sql = 'SELECT * FROM Jobs';
//   db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.send(results);
//   });
// });

// app.post('/jobs', (req, res) => {
//   const { Title, Company, Location, Description } = req.body;
//   const sql = `INSERT INTO Jobs (Title, Company, Location, Description) VALUES (?, ?, ?, ?)`;
//   db.query(sql, [Title, Company, Location, Description], (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// app.put('/jobs/:id', (req, res) => {
//   const { id } = req.params;
//   const { Title, Company, Location, Description } = req.body;
//   const sql = `UPDATE Jobs SET Title = ?, Company = ?, Location = ?, Description = ? WHERE JobID = ?`;
//   db.query(sql, [Title, Company, Location, Description, id], (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// app.delete('/jobs/:id', (req, res) => {
//   const { id } = req.params;
//   const sql = `DELETE FROM Jobs WHERE JobID = ?`;
//   db.query(sql, [id], (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });


// import express from 'express';
// import dotenv from 'dotenv';
// import bodyParser from 'body-parser';
// import authRoutes from './routes/authRoutes.js';

// dotenv.config();

// const app = express();

// app.use(bodyParser.json());
// app.use('/auth', authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));

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

// API routes
app.use('/auth', authRoutes);
app.use('/api', jobRoutes);  // Use job routes here

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is running`));

