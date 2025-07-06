const controller = require('../controllers/orderProductControllers');

class orderProductApi {
    async criarOrderProduct(req, res) {
        const { orderId, productId, quantity } = req.body;

        try {
            const orderProduct = await controller.criarOrderProduct(orderId, productId, quantity);
            res.status(201).json(orderProduct);
        } catch (error) {
            console.error('Error creating order product:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    async listarOrderProducts(req, res) {
        try {
            const orderProducts = await controller.listarOrderProducts();
            return res.status(200).send(orderProducts);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }
    async deletarOrderProduct(req, res) {
        const { id } = req.params;

        try {
            const orderProduct = await controller.deletarOrderProduct(id);
            return res.status(200).send(orderProduct);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }
    async atualizarOrderProduct(req, res) {
        const { id } = req.params;
        const { orderId, productId, quantity } = req.body;

        try {
            const orderProduct = await controller.atualizarOrderProduct(id, orderId, productId, quantity);
            return res.status(200).send(orderProduct);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }
    async buscarOrderProductPorId(req, res) {
        const { id } = req.params;

        try {
            const orderProduct = await controller.buscarOrderProductPorId(id);
            return res.status(200).send(orderProduct);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }
}


module.exports = (new orderProductApi());