const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Api_rest', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;