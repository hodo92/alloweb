const express = require('express');
const router  = express.Router();
const Task    = require('../dataAccess/Task-model');


// Add new task
router.post('/add-task', async (req, res) => {
  try {
    await Task.create(req.body);
    await res.send(JSON.stringify("A new task has been added"));
  } catch (err) {
    alert('Error adding task');
  }
});


module.exports = router;
