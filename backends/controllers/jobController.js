import Job from '../models/Job.js';

export const createJob = (req, res) => {
  const { title, company, location, requirements, description } = req.body;
  const logo = req.file ? req.file.buffer : null;
  const data = { title, company, location, logo, requirements, description };

  Job.create(data, (err, result) => {
    if (err) {
      console.error('Error creating job:', err);
      return res.status(500).json({ message: 'Error creating job' });
    }
    res.status(201).json({ message: 'Job created successfully!' });
  });
};

export const getAllJobs = (req, res) => {
  Job.findAll((err, results) => {
    if (err) {
      console.error('Error fetching jobs:', err);
      return res.status(500).json({ message: 'Error fetching jobs' });
    }
    res.status(200).json(results);
  });
};

export const updateJob = (req, res) => {
  const { title, company, location, requirements, description } = req.body;
  const logo = req.file ? req.file.buffer : null;
  const { id } = req.params;
  const data = { title, company, location, logo, requirements, description };

  Job.update(id, data, (err, result) => {
    if (err) {
      console.error('Error updating job:', err);
      return res.status(500).json({ message: 'Error updating job' });
    }
    res.status(200).json({ message: 'Job updated successfully!' });
  });
};

export const deleteJob = (req, res) => {
  const { id } = req.params;

  Job.delete(id, (err, result) => {
    if (err) {
      console.error('Error deleting job:', err);
      return res.status(500).json({ message: 'Error deleting job' });
    }
    res.status(200).json({ message: 'Job deleted successfully!' });
  });
};
