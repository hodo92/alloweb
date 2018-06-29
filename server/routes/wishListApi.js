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

//add new item to wishlist
router.post('/addToWishList', async (req, res) =>{
    let item = req.body.newitem;
    console.log('!!!!!!!!!!!!!!!!!!');
    console.log(item);
    try {
        await wishList.addToWishList(item);
        console.log(item.title+ 'added to your wishlist!')
        res.send((await wishList.getAllRows(item.user_id)));
    } catch (err) {
        alert(err)
    }

})

module.exports = router;