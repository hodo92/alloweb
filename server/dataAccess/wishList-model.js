const Sequelize = require('sequelize');
const dataAccess = require('./dataAccess');

const WishList = dataAccess.connection.define('WishList', {
    user_id: {
        type: Sequelize.INTEGER,
       
    },
    goal_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    description: {
        type: Sequelize.TEXT 
    },
    price: {
        type: Sequelize.INTEGER
    },
    goal_img: {
        type: Sequelize.TEXT 
    },
    link: {
        type: Sequelize.TEXT 
    },
    status: {
        type: Sequelize.BOOLEAN
    }

})

WishList.belongsTo(User, { foreignKey: 'user_id' });

module.exports =WishList;