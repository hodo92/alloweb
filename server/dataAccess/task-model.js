const Sequelize = require('sequelize');
const dataAccess = require('./dataAccess');
const User = require('../dataAccess/user-model');
// const task_status = require('../dataAccess/task-status-model');


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
                    model: User,
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
        this.model.belongsTo(User, { foreignKey: 'user_id' })
        // User.hasMany(this.model, { foreignKey: 'user_id' });
    }

    getAllRows(userId) {
        return this.model.findAll({ where: { user_id: userId }, include: [User] }); //, include: [User]
    }
}
//join the tables 

const task = new Task();

module.exports = task;