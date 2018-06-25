const Sequelize = require('sequelize');
const dataAccess = require('./dataAccess');



const User = dataAccess.connection.define('User', {
    user_id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    parent_id:{
        type: Sequelize.INTEGER,
    },
    first_name: {
        type: Sequelize.STRING(30)
    },
    last_name: {
        type: Sequelize.STRING(30),
    },
    email: {
        type: Sequelize.STRING(30)
    },
    user_img: {
        type: Sequelize.STRING(200)
    },
    balance: {
        type: Sequelize.INTEGER
    },
    is_parent: {
        type: Sequelize.BOOLEAN
    }
})

User.belongsTo(User, {foreignKey: 'parent_id'});

module.exports = User;