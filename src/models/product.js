const database = require('../config/database');

class product {
    constructor() {
        this.model = database.define('product', {
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: database.Sequelize.STRING,
                allowNull: false
            },
            price: {
                type: database.Sequelize.FLOAT,
                allowNull: false
            },
            category_id: {
                type: database.Sequelize.INTEGER,
                allowNull: false
            },

        });
    }
}

module.exports = (new product()).model;