const database = require('../config/database');

class User {
    constructor() {
        this.model = database.define('user', {
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: database.Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: database.Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: database.Sequelize.STRING,
                allowNull: false
            },
      
        });
    }
}
module.exports = (new User()).model;