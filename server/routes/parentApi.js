const express = require('express');
const router  = express.Router();
const User= require('../dataAccess/user-model');
const Task = require('../dataAccess/task-model')

//get parent by Email when login
router.get('/parents/:email', (req, res) =>{
    User.findAll({where: {email: req.params.email}}).then(data =>{
        res.send(JSON.stringify(data))
    },err => {
        console.error(err);
    })
})

//get kids by parent ID
router.get('/getKidsbyParent/:parentId', (req, res) => {
    User.findAll({where: {parent_id: req.params.parentId}}).then(data=>{
        res.send(JSON.stringify(data))
    },
err =>{
    console.error(err)
});
})




module.exports = router;
