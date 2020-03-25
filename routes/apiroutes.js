const WorkoutData = require("../models/workoutData.js");

module.exports = app => {
  app.get('/api/workouts', (req, res) => {
    WorkoutData.find({})
      .then(data => res.json(data))
      .catch(err => res.status(400).json(err))
  });

  app.get('/api/workouts/range', (req, res) => {
    WorkoutData.find()
      .then(data => res.json(data))
      .catch(err => res.status(400).json(err))
  });

  app.post('/api/workouts', (req, res) => {
    WorkoutData.create({})
      .then(data => res.json(data))
      .catch(err => res.status(400).json(err))
  });

  

 
};