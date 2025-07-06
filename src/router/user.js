const Router = require('express').Router;
const userApi = require('../api/user');

const router = Router();

router.post('/login', userApi.login);

router.post('/', userApi.criaruser);
router.get('/', userApi.listarUsuario);
router.delete('/:id', userApi.deletarUsuario);
router.put('/:id', userApi.atualizarUsuario);


module.exports = router;