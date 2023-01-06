const { Produto, Cliente, sequelize } = require('../Models');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

const clientesController = {
    index: async(req, res) => {
        let clientes = await Cliente.findAll();
        return res.json(clientes);
    },
    registrarcliente: (req, res) => {
        return res.render('registrarcliente')
    },
    registrarprodutos: (req, res) => {
        return res.render('registrarprodutos')
    },
    editarperfil: (req, res) => {
        return res.render('editarperfil', { clientelogin: req.session.clientesOn })
    },
    login: (req, res) => {
        return res.render('login')
    },
    logout: (req, res) => {
        req.session.destroy(function(err) {
        console.log('Destroyed session')
     })
        res.redirect('/clientes/login');
    },
    updatepage: (req, res) => {
        return res.render('updatepage', { clientelogin: req.session.clientesOn })
    },
    create: async(req, res) => {
        const {
            nome_fantasia,
            razao_social,
            cnpj,
            empresa_matriz,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            uf,
            cep,
            telefone,
            whatsapp,
            email,
            password,
            site
        } = req.body;
        const passwordCrypt = bcrypt.hashSync(password, 10);
        const cliente_id = uuidv4();
        const newclientes = await Cliente.create({
            id: uuidv4(),
            nome_fantasia,
            razao_social,
            cnpj,
            empresa_matriz,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            uf,
            cep,
            telefone,
            whatsapp,
            email,
            password: passwordCrypt,
            site
        });
        return res.redirect('/clientes/login');
    },
    update: async(req, res) => {
        const { id } = req.session.clientesOn;
        const {
            nome_fantasia,
            razao_social,
            cnpj,
            empresa_matriz,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            uf,
            cep,
            telefone,
            whatsapp,
            email,
            password,
            site
        } = req.body;
        const passwordCrypt = bcrypt.hashSync(password, 10);
        const cliente = await Cliente.update({
            nome_fantasia,
            razao_social,
            cnpj,
            empresa_matriz,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            uf,
            cep,
            telefone,
            whatsapp,
            email,
            password: passwordCrypt,
            site
        }, {
            where: { id }
        });
        return res.redirect(`/clientes/login`);
    },
    delete: async(req, res) => {
        const { id } = req.session.clientesOn
        
        const deletedProduto = await Produto.destroy({
            where: {
                id_clientes: id
            }
        });

        const clientes = await Cliente.destroy({
            where: { id }
        });
        return res.json(clientes);
    }
}

module.exports = clientesController;