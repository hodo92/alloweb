const Sequelize = require('sequelize');

class DataAccess{
    constructor() {
        this.connection = new Sequelize('sql9244365', 'sql9244365', 'ujpGF2G7gn', {
            host: 'sql9.freemysqlhosting.net',
            dialect: 'mysql',
            operatorsAliases: false, // prevent string deprication
            pool: { // You can read about the pool in the documentation
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
            define: { // Sequelize define timestamp columns by default. To prevent it we will defind the following line
                timestamps: false,
                freezeTableName: true
            }
        });

    }
}


const dataAccess = new DataAccess()

module.exports = dataAccess
