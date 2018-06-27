const express = require('express');
const router  = express.Router();
const user= require('../dataAccess/user-model');
const task = require('../dataAccess/task-model')

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// get parent by Email when login
router.get('/:email', async (req, res) =>{
   let pemail = req.params.email
   try{
       res.send(JSON.stringify(await user.getParent(pemail)));
   } catch (err) {
     alert(err);
   }
   })

//get tasks by parentUserId 
router.get('/getTasksbyParent/:parentId', async (req, res) => {
  let parentId = req.params.userId;
  try {
      res.send(JSON.stringify(await user.getAllTasks(parentId)));
  } catch (err) {
      console.log(err);
  }
})

// get kids by parent ID
router.get('/getKidsbyParent/:parentId', async (req, res) => {
    let parentId = req.params.parentId
    try {
        res.send(JSON.stringify(await user.getKids(parentId)));
        } catch (err) {
          console.log(err);
        }
        })

//add a new child
router.post('/addChild/', async (req, res) => {
  let newChild = req.body.newChild;
  let parentID = newChild.parent_id;
  console.log( newChild );
    await user.addChild(newChild);
   res.send(JSON.stringify(await user.getKids(parentID)));
})


module.exports = router;
