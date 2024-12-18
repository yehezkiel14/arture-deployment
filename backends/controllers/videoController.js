import db from '../models/db.js';

export const addVideo = (req, res) => {
  const { title, description, url } = req.body;
  const query = 'INSERT INTO Videos (Title, Description, URL) VALUES (?, ?, ?)';
  db.query(query, [title, description, url], (err, results) => {
    if (err) throw err;
    res.status(201).json({ message: 'Video added successfully' });
  });
};
