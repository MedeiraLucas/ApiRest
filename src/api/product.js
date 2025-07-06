const controller = require('../controllers/productControllers');
const product = require('../models/product');

class productApi {
    async criarproduct(req, res) {
        const  name = req.body.name;
        const  price = req.body.price;
        const  category_id = req.body.category_id;

        try {
            const product = await controller.criarproduct(name, price, category_id);
            res.status(201).json(product);
        } catch (error) {
            console.error('Error creating product:', error);
            res.status(500).json({ error: 'Internal server error' });
        }   
    }

    async listarProdutos(req, res) {
        try {
            const produtos = await controller.listarProdutos();
            return res.status(200).send(produtos);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async deletarProduto(req, res) {
        const { id } = req.params;

        try {
            const produto = await controller.deletarProduto(id);
            return res.status(200).send(produto);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async atualizarProduto(req, res) {
        const { id } = req.params;
        const { nome, price,} = req.body;

        try {
            const produto = await controller.atualizarProduto(id, nome, price);
            return res.status(200).send(produto);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }
}

module.exports = new productApi();