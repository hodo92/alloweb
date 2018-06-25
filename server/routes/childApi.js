const express = require('express');
const router = express.Router();
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;
const User = require('../dataAccess/user-model');
const Task = require('../dataAccess/task-model')

//get tasks by childuserID -- this will go in Child API
router.get('/getTasksbyKid/:userId', (req, res) => {
    Task.findAll({ where: { user_id: req.params.userId }, include: [User] }).then(data => {
        res.send(JSON.stringify(data))
    },
        err => {
            console.error(err)
        });
})


module.exports = router;
