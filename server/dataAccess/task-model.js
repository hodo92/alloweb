const Sequelize = require('sequelize');
const dataAccess = require('./dataAccess');
const User = require('../dataAccess/user-model');
const task_status = require('../dataAccess/task-status-model');


class Task {
    constructor() {
        this.model = dataAccess.connection.define('Task', {
            task_id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            user_id: {
                type: Sequelize.INTEGER
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
                type: Sequelize.INTEGER
            }
        });
        this.model.belongsTo(User, { foreignKey: 'user_id' });
        this.model.hasMany(task_status, { foreignKey: 'status_id' });
        // company.model.hasMany(this.model, { foreignKey: 'company' })
        // User.hasMany(Foto, { as: 'fotos', foreignKey: 'userId' })

    }

    getAllRows(userId) {
        // return this.model.findAll();
        return this.model.findAll({ where: { user_id: userId }, include: [User] });
    }
}
//join the tables 

const task = new Task();

module.exports = task;