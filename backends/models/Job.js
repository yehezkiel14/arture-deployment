import db from '../config/Db.js';

const Job = {
  create: (data, callback) => {
    const sql = 'INSERT INTO Jobs (Title, Company, Location, Logo, Requirements, Description) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [data.title, data.company, data.location, data.logo, data.requirements, data.description], callback);
  },
  findAll: (callback) => {
    const sql = 'SELECT * FROM Jobs';
    db.query(sql, callback);
  },
  update: (id, data, callback) => {
    const sql = 'UPDATE Jobs SET Title = ?, Company = ?, Location = ?, Logo = ?, Requirements = ?, Description = ? WHERE JobID = ?';
    db.query(sql, [data.title, data.company, data.location, data.logo, data.requirements, data.description, id], callback);
  },
  delete: (id, callback) => {
    const sql = 'DELETE FROM Jobs WHERE JobID = ?';
    db.query(sql, [id], callback);
  }
};

export default Job;
