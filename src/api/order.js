const controller = require('../controllers/orderControllers');

class orderApi {
    async criarorder(req, res) {
        const user_id = req.body.user_id;
        const  product_id = req.body.product_id;

        try {
            const order = await controller.criarorder(user_id, product_id);
            res.status(201).json(order);
        } catch (error) {
            console.error('Error creating order:', error);
            res.status(500).json({ error: 'Internal server error' });
        }   
    }

    async listarOrders(req, res) {
        try {
            const orders = await controller.listarOrders();
            return res.status(200).send(orders);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async deletarOrder(req, res) {
        const { id } = req.params;

        try {
            const order = await controller.deletarOrder(id);
            return res.status(200).send(order);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async atualizarOrder(req, res) {
        const { id } = req.params;
        const { user_id, product_id } = req.body;

        try {
            const order = await controller.atualizarOrder(id, user_id, product_id);
            return res.status(200).send(order);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

}

module.exports = new orderApi();