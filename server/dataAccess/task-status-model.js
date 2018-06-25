const Sequelize = require('sequelize');
const dataAccess = require('./dataAccess');

const Task_Status = dataAccess.connection.define('Task_Status', {
  status_code: {
      type: Sequelize.TINYINT
  },
  status_name: {
      type: Sequelize.STRING(20)
  }

})

module.exports = Task_Status;