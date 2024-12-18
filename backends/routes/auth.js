import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../config/Db.js';
import authMiddleware from '../controllers/authMiddleware.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Get user profile
router.get('/user', authMiddleware, async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT FullName, Email, ProfilePicture, PhoneNumber, Address, Education, AboutMe, Skills, OrganizationalExperience, AwardsAndCertificates FROM Users WHERE Email = ?', [req.user.email]);
    if (rows.length === 0) {
      return res.status(404).send({ error: 'User not found.' });
    }
    res.status(200).send(rows[0]);
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).send({ error: 'Something went wrong.' });
  }
});

// Update user profile
router.post('/updateProfile', authMiddleware, async (req, res) => {
  const { fullName, profilePicture, phoneNumber, address, education, aboutMe, skills, organizationalExperience, awardsAndCertificates } = req.body;
  try {
    await pool.query('UPDATE Users SET FullName = ?, ProfilePicture = ?, PhoneNumber = ?, Address = ?, Education = ?, AboutMe = ?, Skills = ?, OrganizationalExperience = ?, AwardsAndCertificates = ? WHERE Email = ?', 
      [fullName, profilePicture, phoneNumber, address, education, aboutMe, skills, organizationalExperience, awardsAndCertificates, req.user.email]);
    res.status(200).send({ message: 'Profile updated successfully' });
  } catch (err) {
    console.error('Error updating profile:', err);
    res.status(500).send({ error: 'Something went wrong.' });
  }
});

// Signup route
router.post('/signup', async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    const [rows] = await pool.query('SELECT * FROM Users WHERE Email = ?', [email]);
    if (rows.length > 0) {
      return res.status(400).send({ error: 'Email already in use.' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    await pool.query('INSERT INTO Users (FullName, Email, PasswordHash) VALUES (?, ?, ?)', [fullName, email, passwordHash]);

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).send({ token });
  } catch (err) {
    console.error('Error during signup:', err);
    res.status(500).send({ error: 'Something went wrong.' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await pool.query('SELECT * FROM Users WHERE Email = ?', [email]);
    if (rows.length === 0) {
      return res.status(400).send({ error: 'Invalid email or password.' });
    }

    const user = rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.PasswordHash);
    if (!isPasswordValid) {
      return res.status(400).send({ error: 'Invalid email or password.' });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).send({ token });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).send({ error: 'Something went wrong.' });
  }
});

// Admin route to get users
router.get('/admin/users', authMiddleware, async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT UserID, FullName, Email FROM Users');
    res.status(200).send(rows);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).send({ error: 'Something went wrong.' });
  }
});

export default router;
