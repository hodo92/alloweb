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
    try {
        await wishList.addToWishList(item);
        console.log(item.title+ 'added to your wishlist!')
        res.send((await wishList.getAllRows(item.user_id)));
    } catch (err) {
        alert(err)
    }

})

//remove item from the wishlist

router.delete('/removeFromWishList/:wish', async (req, res) => {
    let wish = req.params.wish
    console.log(wish);
    try {
        await wishList.removeFromWishList(wish);
        res.send(JSON.stringify(wish + 'deleted'))
    } catch (err){
        alert(err);
    }
})

module.exports = router;