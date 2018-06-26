const express = require('express');
const router = express.Router();
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;
const User = require('../dataAccess/user-model');
const task = require('../dataAccess/task-model')

//get tasks by childuserID -- this will go in Child API
router.get('/:userId', async (req, res) => {  //router.get('/getTasksbyKid/:userId', async (req, res) => {
    let childId = req.params.userId;
    // try {
        res.send(JSON.stringify(await task.getAllRows(childId)));
        
    // } catch (err) {
    //     alert(err);
    // }
    
    
    

    //  await Task.findAll({ where: { user_id: req.params.userId }, include: [User] }).then(data => {
    //     res.send(JSON.stringify(data))
    // },
    //     err => {
    //         console.error(err)
    //     });
    // console.log(childId);
})

// async function f() {

//     try {
//         let response = await fetch('http://no-such-url');
//     } catch (err) {
//         alert(err); // TypeError: failed to fetch
//     }
// }


module.exports = router;
