const express = require('express');
const router  = express.Router();
const User= require('../dataAccess/user-model');
const Task = require('../dataAccess/task-model')

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// get parent by Email when login
router.get('/parents/:email', (req, res) =>{
    User.findAll({
        where: {email: req.params.email} }
    ).then(data =>{
        res.send(JSON.stringify(data))
    }, err => {
        res.send(err);
    })
})

// get kids by parent ID
router.get('/getKidsbyParent/:parentId', (req, res) => {
    User.findAll({where: {parent_id: req.params.parentId}}).then(data=>{
        res.send(JSON.stringify(data))
    },
err =>{
    console.error(err)
});
})




module.exports = router;
