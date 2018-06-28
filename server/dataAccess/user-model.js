const Sequelize = require('sequelize');
const dataAccess = require('./dataAccess');
const task = require('../dataAccess/task-model');
const Op = Sequelize.Op

class User {
    constructor() {
        this.model = dataAccess.connection.define('User', {
            user_id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            parent_id: {
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
        this.model.belongsTo(this.model, { foreignKey: 'parent_id' });
    }

    addChild(newChild) {
        return this.model.create(newChild)
    })

    getParent(pemail) {
        return user.model.findAll({
            where: {
                email: pemail
            }
        });
    }
    getKids(parentId) {
        return user.model.findAll({
            where: {
                parent_id: parentId
            }
        });
    }

    // getAllParentTasks
    getAllTasks(userId) {
        return this.model.findAll({ include: [task.model], where:{ parent_id: userId} }); 
    }
}


const user = new User();
module.exports = user;




//    //getAllChildTasks
//    getAllRows(userId) {
//     return this.model.findAll({ where: { user_id: userId }, include: [task.model] }); //, include: [User]
// }
// this.model.belongsTo(this.model, {foreignKey: 'parent_id'});
// this.model.hasMany(task.model, { foreignKey: 'user_id' });