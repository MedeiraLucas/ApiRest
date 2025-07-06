const Router = require('express').Router;
const orderProductApi = require('../api/orderProduct');

const router = Router();
router.post('/', orderProductApi.criarOrderProduct);
router.get('/', orderProductApi.listarOrderProducts);
router.delete('/:id', orderProductApi.deletarOrderProduct);
router.put('/:id', orderProductApi.atualizarOrderProduct);
router.get('/:id', orderProductApi.buscarOrderProductPorId);

module.exports = router;