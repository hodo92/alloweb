
const express = require('express');
const router  = express.Router();
const user= require('../dataAccess/user-model');
const task = require('../dataAccess/task-model')

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// get parent by Email when login
// router.get('/:email', async (req, res) =>{
//    let pemail = req.params.email
//    try{
//        res.send(JSON.stringify(await user.getParent(pemail)));
//    } catch (err) {
//      alert(err);
//    }
//    })


module.exports = router;