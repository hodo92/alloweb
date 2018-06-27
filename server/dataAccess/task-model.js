const Sequelize = require('sequelize');
const dataAccess = require('./dataAccess');
const user = require('../dataAccess/user-model');

class Task {
    constructor() {
        this.model = dataAccess.connection.define('Task', {
            task_id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: user.model,
                    key: 'user_id'
                }
            },
            title: {
                type: Sequelize.TEXT
            },
            description: {
                type: Sequelize.TEXT
            },
            payment: {
                type: Sequelize.INTEGER
            },
            deadline: {
                type: Sequelize.DATE
            },
            status_id: {
                type: Sequelize.TINYINT
            }
        });
       // this.model.belongsTo(user.model, { foreignKey: 'user_id' })
        // User.hasMany(this.model, { foreignKey: 'user_id' });
    }
    //getAllChildTasks
    getAllRows(userId) {
        return this.model.findAll({ where: { user_id: userId }, include: [user.model] }); //, include: [User]
    }

    // //getAllParentTasks
    //  getAllTasks(userId) {
    //     return this.model.findAll({ include: [user.model], where: { parent_id: 1 } }); //, include: [User]
    // }


    addTask(task) {
        return this.model.create(task);
    }
}
//join the tables 

const task = new Task();

module.exports = task;