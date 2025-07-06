const Router = require('express').Router;
const productApi = require('../api/product');

const router = Router();

router.post('/', productApi.criarproduct);
router.get('/', productApi.listarProdutos);
router.delete('/:id', productApi.deletarProduto);
router.put('/:id', productApi.atualizarProduto);


module.exports = router;