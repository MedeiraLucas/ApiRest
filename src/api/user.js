const controller = require('../controllers/userControllers');

class userApi {
    async criaruser(req, res) {
        const  name = req.body.name;
        const  email = req.body.email;
        const  password = req.body.password;

        try {
            const user = await controller.criaruser(name, email, password);
            res.status(201).json(user);
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async listarUsuario(req, res) {
        try {
            const usuarios = await controller.listarUsuarios();
            return res.status(200).send(usuarios);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async deletarUsuario(req, res) {
        const { id } = req.params;

        try {
            const usuario = await controller.deletarUsuario(id);
            return res.status(200).send(usuario);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async atualizarUsuario(req, res) {
        const { id } = req.params;
        const { name, email, password } = req.body;

        try {
            const usuario = await controller.atualizarUsuario(id, name, email, password);
            return res.status(200).send(usuario);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }
    
    async login(req, res) {
        const { email, password } = req.body;

        try {
            const user = await controller.login(email, password);
            if (user) {
                return res.status(200).send(user);
            } else {
                return res.status(401).send({ error: 'Invalid credentials' });
            }
        } catch (error) {
            return res.status(500).send({ error: 'Internal server error' });
        }
    }
}


module.exports = new userApi();