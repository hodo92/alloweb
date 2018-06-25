const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');


const Op = Sequelize.Op;
const User = require('../dataAccess/user-model');

// Retreive single child information, including his tasks
router.get('/child/:id', async (req, res) => {
  try {
    User.findOne({
      where: {
        userId: req.params.id
      },
      include: [{
        model: Task,
        where: {
          status_code: {
            [Op.ne]: 3
          }
        }
      }]
    })
  } catch (err) {
    alert(err);
  }

});

module.exports = router;
