const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const category = require("../models/category");

class CategoryController {
  async criarCategory(name) {
    if (name === undefined) {
      throw new Error("Preencha os campos obrigatórios");
    }
    const newCategory = await category.create({
      name,
    });
    return {
      id: newCategory.id,
      name: newCategory.name,
    };
  }

  async listCategories() {
    return category.findAll();
  }

  async deleteCategory(id) {
    if (id === undefined) {
      throw new Error("Preencha o campo obrigatório");
    }
    const categoryToDelete = await category.findByPk(id);
    if (!categoryToDelete) {
      throw new Error("Categoria não encontrada");
    }
    await category.destroy({ where: { id } });
    return { message: "Categoria deletada com sucesso" };
  }

  async atualizarCategory(id, name) {
    if (id === undefined || name === undefined) {
      throw new Error("Preencha  os campos obrigatórios");
    }
    const categoryToUpdate = await category.findByPk(id);
    if (!categoryToUpdate) {
      throw new Error("Categoria não encontrada");
    }
    await category.update(
      { name },
      { where: { id } }
    );
    return { message: "Categoria atualizada com sucesso" };
  }
  
}
module.exports = new CategoryController();