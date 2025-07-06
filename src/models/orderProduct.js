const { or } = require('sequelize');
const database = require('../config/database');


class OrderProduct {
  constructor() {
    this.model = database.define('orderProduct', {
      id: {
        type: database.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      orderId: {
        type: database.Sequelize.INTEGER,
      },
      productId: {
        type: database.Sequelize.INTEGER,
      },
    });
  }
}



module.exports = (new OrderProduct()).model;
