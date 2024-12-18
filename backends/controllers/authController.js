import bcrypt from 'bcryptjs';
import db from '../config/Db.js';

export const login = (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM Users WHERE Email = ?';
  db.query(query, [email], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      return res.status(400).json({ message: 'User not found' });
    }
    const user = results[0];
    bcrypt.compare(password, user.PasswordHash, (err, isMatch) => {
      if (err) throw err;
      if (!isMatch) {
        return res.status(400).json({ message: 'Incorrect password' });
      }
      res.status(200).json({ message: 'Logged in successfully' });
    });
  });
};

export const signup = (req, res) => {
  const { fullName, email, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) throw err;
    const query = 'INSERT INTO Users (FullName, Email, PasswordHash) VALUES (?, ?, ?)';
    db.query(query, [fullName, email, hash], (err, results) => {
      if (err) throw err;
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
};
