const express = require('express');
const router  = express.Router();
const User= require('../dataAccess/user-model');

//get parent by Email
router.get('/parents/:email', (req, res) =>{
    User.findAll({where: {email: req.params.email}}).then(data =>{
        res.send(JSON.stringify(data))
    },err => {
        console.error(err);
    })
})

module.exports = router;
