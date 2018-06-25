const express = require('express');
const router = express.Router();
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;
const User = require('../dataAccess/user-model');
const task = require('../dataAccess/task-model')

//get tasks by childuserID -- this will go in Child API
router.get('/getTasksbyKid/:userId', async (req, res) => {
    let childId = req.params.userId;
    res.send(JSON.stringify(await task.getAllRows(childId)));
    console.log(this.tasks);

    //  await Task.findAll({ where: { user_id: req.params.userId }, include: [User] }).then(data => {
    //     res.send(JSON.stringify(data))
    // },
    //     err => {
    //         console.error(err)
    //     });
})


module.exports = router;
