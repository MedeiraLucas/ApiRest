const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const order = require("../models/order");

class OrderController {
  async criarorder(user_id, product_id) {
    if (user_id === undefined
      || product_id === undefined) {
      throw new Error("Preencha  os campos obrigatórios");
    }
    const newOrder = await order.create({
      user_id,
      product_id,
    });
    return {
      id: newOrder.id,
      user_id: newOrder.user_id,
      product_id: newOrder.product_id,
    };
  }
  
  async listOrders() {
    return order.findAll();
  }

  async deleteOrder(id) {
    if (id === undefined) {
      throw new Error("Preencha o campo obrigatório");
    }
    const orderToDelete = await order.findByPk(id);
    if (!orderToDelete) {
      throw new Error("Pedido não encontrado");
    }
    await order.destroy({ where: { id } });
    return { message: "Pedido deletado com sucesso" };
  }
  
  async atualizarOrder(id, user_id, product_id) {
    if (id === undefined
      || user_id === undefined
      || product_id === undefined) {
      throw new Error("Preencha  os campos obrigatórios");
    }
    const orderToUpdate = await order.findByPk(id);
    if (!orderToUpdate) {
      throw new Error("Pedido não encontrado");
    }
    await order.update(
      { user_id, product_id },
      { where: { id } }
    );
    return { message: "Pedido atualizado com sucesso" };
  }


}
module.exports = new OrderController();