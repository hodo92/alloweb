const Sequelize = require('sequelize');
const dataAccess = require('./dataAccess');

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
        this.model.hasMany(task_status, { foreignKey: 'status_id' });
        // task.model.hasMany(this.model, { foreignKey: 'company' })
    }

}

const task_status = new Task_Status();
module.exports = task_status;