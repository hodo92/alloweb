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

    addParent(newParent) {
        return this.model.create(newParent)
    }

    getParent(pemail) {
        return user.model.findAll({
            where: {
                email: pemail
            }
        });
    }

    getParentById(parentId) {
        return user.model.findAll({
            where: {
             user_id: parentId
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

    buyNow(wish){
         this.model.findById(wish.user_id).then(data =>{
            return data.decrement('balance', { by: wish.price }).then(data =>{
                
            })
        });
    }

    taskPay(userId, payment) {
        this.model.findById(userId).then(user => {
            return user.increment('balance', { by: payment });
        }).then(user => {
        
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
