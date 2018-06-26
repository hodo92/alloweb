const express = require('express');
const router = express.Router();
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;
const User = require('../dataAccess/user-model');

const WishList = require('../dataAccess/wishList-model');

// get wishlist  by user_id 

router.get('/getWishListsbyKid/:userId', (req, res) => {
    WishList.findAll({ where: { user_id: req.params.userId }, include: [User] }).then(data => {
        res.send(JSON.stringify(data))
    },
        err => {
            console.error(err)
        });
})

module.exports = router;

