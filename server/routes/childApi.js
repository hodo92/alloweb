const express = require('express');
const router = express.Router();
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;
const User = require('../dataAccess/user-model');
const task = require('../dataAccess/task-model')

//get tasks by childuserID -- this will go in Child API
router.get('/:userId', async (req, res) => {  //router.get('/getTasksbyKid/:userId', async (req, res) => {
    let childId = req.params.userId;
    try {
        res.send(JSON.stringify(await task.getAllRows(childId)));
    } catch (err) {
        alert(err);
    }
})




module.exports = router;
