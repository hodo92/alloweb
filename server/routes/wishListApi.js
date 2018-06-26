const express = require('express');
const router = express.Router();
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;
const user = require('../dataAccess/user-model');
const wishList = require('../dataAccess/wishList-model');

// get wishlist  by user_id 

router.get('/:userId', async (req, res) => {
    let userID = req.params.userId;
    try {
        res.send(JSON.stringify(await wishList.getAllRows(userID)));
    } catch (err) {
        alert(err);
    }
})

// router.get('/:userId', async (req, res) => {
//     let childId = req.params.userId;
//     try {
//         res.send(JSON.stringify(await task.getAllRows(childId)));
//     } catch (err) {
//         alert(err);
//     }
// })

module.exports = router;



/*
router.get('/getWishListsbyKid/:userId', (req, res) => {
    WishList.findAll({ where: { user_id: req.params.userId }, include: [User] }).then(data => {
        res.send(JSON.stringify(data))
    },
        err => {
            console.error(err)
        });
})
*/