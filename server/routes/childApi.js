const express = require('express');
const router = express.Router();
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;
const user = require('../dataAccess/user-model');
const task = require('../dataAccess/task-model')

//get tasks by childuserID -- this will go in Child API
router.get('/:userId', async (req, res) => {
    let childId = req.params.userId;
    // console.log("++++++++++++++++++++++++++")
    // console.log(childId);
    try {
        res.send(JSON.stringify(await task.getAllRows(childId)));
    } catch (err) {
        console.log(err);
    }
})


// Add task
router.post('/', async (req, res) => {
    let newTask = req.body
    // console.log('++++++++++++' + newTask);
    try {
        await task.addTask(newTask);
        res.send(JSON.stringify(await task.getAllRows(newTask.user_id)));
    } catch (err) {
        console.log(err);
    }
})


// Task complete - status update
router.put('/taskComplete', async (req, res) => {
    let taskId = req.body.task_id;
    let userId = req.body.user_id;
    try {
        await task.taskComplete(taskId);
        res.send(JSON.stringify(await task.getAllRows(userId)));
    }
    catch (err) {
        console.log(err);
    }
})


// Task incomplete - status & unpay update
router.put('/taskIncomplete', async (req, res) => {
    let taskId = req.body.task_id;
    let userId = req.body.user_id;
    let payment = req.body.payment;
    try {
        await task.taskIncomplete(taskId);
        await user.taskUnPay(userId, payment);
        res.send(JSON.stringify(await task.getAllRows(userId)));
    }
    catch (err) {
        console.log(err);
    }
})


// Task approve & pay - status update
router.put('/approveTask', async (req, res) => {
    let taskId = req.body.task_id;
    let userId = req.body.user_id;
    let payment = req.body.payment;
    try {
        await task.approveTask(taskId);
        await user.taskPay(userId, payment);
        res.send(JSON.stringify(await task.getAllRows(userId)));     
    }
    catch (err) {
        console.log(err);
    }
})


/////////////////////////////////////////////////////////////////////////////////////
//add a new child
router.post('/addChild/', async (req, res) => {
    let newChild = req.body.newChild
    // console.log('++++++++++++' + newChild);
    res.send(JSON.stringify(await user.addChild(newChild)));
})


//get child data by childId
router.get('/getChildById/:childId', async (req, res) =>{
    let childId = req.params.childId;
    // console.log(childId);
    try {
         res.send(JSON.stringify(await user.getChildById(childId)));
    } 
    catch (err){
        console.log(err);
    }
})
module.exports = router;




        // .then((data) => {
        //     console.log(data); // rows affected
        // }, (err) => {
        //     console.error(err)
        // });
        // // res.send(data);
        // // res.send(JSON.stringify(await task.getAllRows(userId)));

            // console.log("++++++++++++++++++++++++++");
    // console.log("childApi - taskIncomplete - taskId");
    // console.log(req.body);