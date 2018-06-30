const Sequelize = require('sequelize');
const dataAccess = require('./dataAccess');
const user = require('../dataAccess/user-model');


class WishList {
    constructor() {
        this.model = dataAccess.connection.define('WishList', {
            user_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: user.model,
                    key: 'user_id'
                }
            },
            goal_id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            title: {
                type: Sequelize.TEXT
            },
            description: {
                type: Sequelize.TEXT
            },
            price: {
                type: Sequelize.INTEGER
            },
            goal_img: {
                type: Sequelize.TEXT
            },
            link: {
                type: Sequelize.TEXT
            },
            status: {
                type: Sequelize.BOOLEAN
            },
            progress: {
                type: Sequelize.INTEGER
            }

        })
        this.model.belongsTo(user.model, { foreignKey: 'user_id' })
    }

    getAllRows(userId) {
        return this.model.findAll({ where: { user_id: userId }, include: [user.model] });
    }

    addToWishList(item){
       return this.model.create(item);
    }

    removeFromWishList(wish){
        return this.model.destroy({where: { goal_id: wish}})
    }    
}

// WishList.belongsTo(User, { foreignKey: 'user_id' });
const wishList = new WishList();

module.exports = wishList;