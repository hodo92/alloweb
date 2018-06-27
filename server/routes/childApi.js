const express = require('express');
const router = express.Router();
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;
const user = require('../dataAccess/user-model');
const task = require('../dataAccess/task-model')

//get tasks by childuserID -- this will go in Child API
router.get('/:userId', async (req, res) => {
    let childId = req.params.userId;
    try {
        res.send(JSON.stringify(await task.getAllRows(childId)));
    } catch (err) {
        alert(err);
    }
})

// Add task
router.post('/', async (req, res) => {
    let newTask = req.body
    console.log('++++++++++++' + newTask);
    try {
        await task.addTask(newTask);
        res.send(JSON.stringify(await task.getAllRows(newTask.user_id)));
    } catch (err) {
        alert(err);
    }
    // res.send(JSON.stringify(await user.addChild(newTask)));
})


/////////////////////////////////////////////////////////////////////////////////////


module.exports = router;
