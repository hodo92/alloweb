const express = require('express');
const router  = express.Router();
const User    = require('../dataAccess/user-model');

// Retreive a parent's information and that of his children
router.get('/parent/:id', async (req, res) => {
  try {
    await User.findAll({
      where: {
        parentId: req.params.id
      },
      include: [{
        model: Task,
        where: {
          status_code: {
            [Op.ne]: 3
          }
        }
      }]
    });
    await res.send(JSON.stringify(data));
  } catch (err) {
    alert(err);
  }
});

// Add new parent or child
router.post('/add-user', async (req, res) => {
  try {
    await User.create(req.body);
    await res.send(JSON.stringify(`$(req.body.firstName) has been added`));
  } catch (err) {
    alert('Error adding user');
  }
});

module.exports = router;
