const controller = require('../controllers/categoryControllers');
const category = require('../models/category');

class categoryApi {
    async criarCategory(req, res) {
        const  name = req.body.name;

        try {
            const category = await controller.criarCategory(name);
            res.status(201).json(category);
        } catch (error) {
            console.error('Error creating category:', error);
            res.status(500).json({ error: 'Internal server error' });
        }   
    }

    async listarCategories(req, res) {
        try {
            const categories = await controller.listarCategories();
            return res.status(200).send(categories);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async deletarCategory(req, res) {
        const { id } = req.params;

        try {
            const category = await controller.deletarCategory(id);
            return res.status(200).send(category);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async atualizarCategory(req, res) {
        const { id } = req.params;
        const { name } = req.body;

        try {
            const category = await controller.atualizarCategory(id, name);
            return res.status(200).send(category);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }
}  

module.exports = new categoryApi();