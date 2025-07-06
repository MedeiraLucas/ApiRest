const Router = require('express').Router;
const categoryApi = require('../api/category');

const router = Router();

router.post('/', categoryApi.criarCategory);
router.get('/', categoryApi.listarCategories);
router.delete('/:id', categoryApi.deletarCategory);
router.put('/:id', categoryApi.atualizarCategory);
module.exports = router;