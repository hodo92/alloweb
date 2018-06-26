const Sequelize = require('sequelize');
const dataAccess = require('./dataAccess');


class User {
    constructor(){
 this.model = dataAccess.connection.define('User', {
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
this.model.belongsTo(this.model, {foreignKey: 'parent_id'});
    }

addChild(newChild){
    return this.model.create(newChild)
    }
}

const user = new User();
module.exports = user;