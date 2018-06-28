const Sequelize = require('sequelize');
const dataAccess = require('./dataAccess');
const task = require('../dataAccess/task-model')


class Task_Status {
    constructor() {
        this.model = dataAccess.connection.define('Task_Status', {
            status_id: {
                type: Sequelize.TINYINT,
                primaryKey: true
            },
            status_name: {
                type: Sequelize.STRING(20)
            }
        });
        // task.model.hasMany(this.model, { foreignKey: 'status_id' });
        task.model.hasMany(this.model, { foreignKey: 'status_id' });
        // this.model.belongsTo(task.model);
        // task.model.hasOne(this.model, { foreignKey: 'status_id' });
    }

}

const task_status = new Task_Status();
module.exports = task_status;