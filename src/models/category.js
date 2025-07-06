const database = require('../config/database');

class category {
    constructor() {
        this.model = database.define('category', {
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: database.Sequelize.STRING,
                allowNull: false
            },
        
        });
    }
}

module.exports = (new category()).model;