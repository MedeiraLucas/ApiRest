const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const SECRET = process.env.JWT_SECRET || "defaultsecret";

const userController = {
  async criaruser(name, email, password){
    if (
        name === undefined 
        || email === undefined 
        || password === undefined
      ) {
        throw new Error("Preencha  os campos obrigatórios");
      }
        const user = await User.findOne({ where: { email } });
        if (user) {
          throw new Error("Email já cadastrado");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
          name,
          email,
          password: hashedPassword,
        });
        
        return {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
        };
  },

  async listarUsuarios() {
    return User.findAll();
  },

  async deletarUsuario(id) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    await user.destroy();
    return { message: "Usuário excluido  com sucesso" };
  },
  
  async atualizarUsuario(id, name, email, password) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    if (name !== undefined) user.name = name;
    if (email !== undefined) user.email = email;
    if (password !== undefined) {
      user.password = await bcrypt.hash(password, 10);
    }
    await user.save();
    return user;
  },

  async buscarUsuarioPorId(id) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    return user;
  },
  async login(email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Senha incorreta");
    }
    const token = jwt.sign({ id: user.id }, SECRET, {
      expiresIn: "1h",
    });
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token,
    };
  },

  async logout(token) {
    
    return { message: "Usuário deslogado com sucesso" };
  }
}
  module.exports = userController;