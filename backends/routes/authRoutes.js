// // // import express from 'express';
// // // import { login, signup } from '../controllers/authController.js';

// // // const router = express.Router();

// // // router.post('/login', login);
// // // router.post('/signup', signup);

// // // export default router;


// // import express from 'express';
// // import bcrypt from 'bcryptjs';
// // import jwt from 'jsonwebtoken';
// // import { getUserByEmail, createUser } from '../models/userModel.js';

// // const router = express.Router();

// // // Signup
// // router.post('/signup', async (req, res) => {
// //   const { fullName, email, password } = req.body;

// //   try {
// //     // Cek apakah email sudah digunakan
// //     const existingUser = await getUserByEmail(email);
// //     if (existingUser) {
// //       return res.status(400).json({ message: 'Email sudah terdaftar.' });
// //     }

// //     // Hash password dan simpan user
// //     const passwordHash = await bcrypt.hash(password, 10);
// //     const userId = await createUser(fullName, email, passwordHash);

// //     res.status(201).json({ message: 'Akun berhasil dibuat.', userId });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Terjadi kesalahan server.', error });
// //   }
// // });

// // // Login
// // router.post('/login', async (req, res) => {
// //   const { email, password } = req.body;

// //   try {
// //     // Cek apakah user ada
// //     const user = await getUserByEmail(email);
// //     if (!user) {
// //       return res.status(404).json({ message: 'Email tidak ditemukan.' });
// //     }

// //     // Verifikasi password
// //     const isPasswordValid = await bcrypt.compare(password, user.PasswordHash);
// //     if (!isPasswordValid) {
// //       return res.status(401).json({ message: 'Password salah.' });
// //     }

// //     // Generate JWT
// //     const token = jwt.sign({ id: user.UserID, email: user.Email }, process.env.JWT_SECRET, {
// //       expiresIn: '1h',
// //     });

// //     res.status(200).json({ message: 'Login berhasil.', token });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Terjadi kesalahan server.', error });
// //   }
// // });
  
  

// // export default router;


// // routes/auth.js
// import express from 'express';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import pool from '../config/    b.js';

// const router = express.Router();

// router.post('/signup', async (req, res) => {
//   const { fullName, email, password, profilePicture, bio } = req.body;

//   try {
//     const [rows] = await pool.query('SELECT * FROM Users WHERE Email = ?', [email]);
//     if (rows.length > 0) {
//       return res.status(400).send({ error: 'Email already in use.' });
//     }

//     const passwordHash = await bcrypt.hash(password, 10);
//     await pool.query('INSERT INTO Users (FullName, Email, PasswordHash, ProfilePicture, Bio) VALUES (?, ?, ?, ?, ?)', [fullName, email, passwordHash, profilePicture, bio]);

//     const token = jwt.sign({ email }, 'your_jwt_secret', { expiresIn: '1h' });
//     res.status(201).send({ token });
//   } catch (err) {
//     res.status(500).send({ error: 'Something went wrong.' });
//   }
// });

// export default router;
