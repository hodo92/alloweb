const Sequelize = require('sequelize');
const dataAccess = require('./dataAccess');

const Task_Status = dataAccess.connection.define('Task_Status', {
  status_id: {
      type: Sequelize.TINYINT,
      primaryKey:true
  },
  status_name: {
      type: Sequelize.STRING(20)
  }

})

module.exports = Task_Status;