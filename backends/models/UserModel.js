// import {Sequelize} from "sequelize";
// import db from "../config/Db.js";

// const {DataTypes} = Sequelize;

// const User = db.define('users',{
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     gender: DataTypes.STRING
// },{
//     freezeTableName:true
// });

// export default User;

// (async()=>{
//     await db.sync();
// })();


import pool from '../config/Db.js';

// Get user by email
export const getUserByEmail = async (email) => {
  const [rows] = await pool.query('SELECT * FROM Users WHERE Email = ?', [email]);
  return rows[0];
};

// Create new user
export const createUser = async (fullName, email, passwordHash, profilePicture = null, bio = null) => {
  const [result] = await pool.query(
    'INSERT INTO Users (FullName, Email, PasswordHash, ProfilePicture, Bio) VALUES (?, ?, ?, ?, ?)',
    [fullName, email, passwordHash, profilePicture, bio]
  );
  return result.insertId;
};

