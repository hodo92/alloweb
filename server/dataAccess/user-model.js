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
            },
            pw: {
                type: Sequelize.STRING(15)
            }
        })

        task.model.belongsTo(this.model, { foreignKey: 'user_id' });
        this.model.hasMany(task.model, { foreignKey: 'user_id' });
    }

    addChild(newChild) {
        return this.model.create(newChild)
    }

    getParent(pemail) {
        return user.model.findAll({
            where: {
                email: pemail
            }
        });
    }

    getChildById(childId) {
        return user.model.find({
            where: {
                user_id: childId
            }
        })
    }

    getAllTasks(parentId) {
        return this.model.findAll({ include: [{ model: task.model }], where: { parent_id: parentId } });
    }

    getKids(parentId) {
        return user.model.findAll({
            where: {
                parent_id: parentId
            }
        });
    }










    taskPay(userId, payment) {
        this.model.findById(userId).then(user => {
            return user.increment('balance', { by: payment });
        }).then(user => {
            // Postgres will return the updated user by default (unless disabled by setting { returning: false })
            // In other dialects, you'll want to call user.reload() to get the updated instance...
        })
    }

    taskUnPay(userId, payment) {
        this.model.findById(userId).then(user => {
            return user.decrement('balance', { by: payment });
        }).then(user => {
            
        })
    }
}

const user = new User();
module.exports = user;


// const Sequelize = require('sequelize');
// const dataAccess = require('./dataAccess');
// // const task = require('../dataAccess/task-model');
// // const Op = Sequelize.Op

// class User {
//     constructor() {
//         this.model = dataAccess.connection.define('User', {
//             user_id: {
//                 type: Sequelize.INTEGER,
//                 primaryKey: true
//             },
//             parent_id: {
//                 type: Sequelize.INTEGER,
//             },
//             first_name: {
//                 type: Sequelize.STRING(30)
//             },
//             last_name: {
//                 type: Sequelize.STRING(30),
//             },
//             email: {
//                 type: Sequelize.STRING(30)
//             },
//             user_img: {
//                 type: Sequelize.STRING(200)
//             },
//             balance: {
//                 type: Sequelize.INTEGER
//             },
//             is_parent: {
//                 type: Sequelize.BOOLEAN
//             }
//         })
//         this.model.belongsTo(this.model, { foreignKey: 'parent_id' });
//         // this.model.hasMany(task.model, { foreignKey: 'user_id' });
//     }

//     addChild(newChild) {
//         return this.model.create(newChild)

//     }
//     getParent(pemail) {
//         return user.model.findAll({
//             where: {
//                 email: pemail

//             }
//         })
//     }

//     getAllTasks(parentId) {
//         return this.model.findAll({ include: [task.model], where:{ parent_id: parentId} }); 
//     }

//     getKids(parentId){
//         return user.model.findAll({
//           where: {
//             parent_id: parentId
//           }
//         });

//     }
// }


// const user = new User();
// module.exports = user;