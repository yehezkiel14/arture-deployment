// import db from '../config/Db.js';

// export const addEbook = (req, res) => {
//   const { title, author, description } = req.body;
//   const filePath = req.file ? req.file.path : null; // Asumsikan Anda menggunakan multer untuk upload file
//   const query = 'INSERT INTO Ebooks (Title, Author, Description, FilePath) VALUES (?, ?, ?, ?)';
//   db.query(query, [title, author, description, filePath], (err, results) => {
//     if (err) throw err;
//     res.status(201).json({ message: 'Ebook added successfully' });
//   });
// };
