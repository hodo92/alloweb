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


//add a new child
router.post('/addChild/', async (req, res) => {
    let newChild = req.body.newChild
    console.log('++++++++++++' + newChild)

    res.send(JSON.stringify(await user.addChild(newChild)));
})


























router.put('/updateStatus', async (req, res) => {
    // debugger;
    // let taskCompleted = req.body;
    // let updatedTask = req.body;
    // let updatedTask = req.body;
    let taskId = req.body.task_id;
    console.log("+++++++++++++++++++++++++++++++++++");
    console.log("task-Api");
    console.log(req.body);
    // console.log(childId);

    // try {
    await task.taskStatusCompleted(taskId);

    res.send(JSON.stringify(await task.getAllRows(2)));


    // } 
    // catch (err) {
    //     alert(err);
    // }
})



module.exports = router;
