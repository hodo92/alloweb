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
        this.model.belongsTo(user.model, { foreignKey: 'user_id' })
        // User.hasMany(this.model, { foreignKey: 'user_id' });
    }

    getAllRows(userId) {
        return this.model.findAll({ where: { user_id: userId }, include: [user.model] }); //, include: [User]
    }

    addTask(task) {
        return this.model.create(task);
    }













    








    taskStatusCompleted(updatedTaskId) {
        return this.model.update({ status_id: 2 }, { where: { task_id: updatedTaskId } });
    }
}


const task = new Task();

module.exports = task;