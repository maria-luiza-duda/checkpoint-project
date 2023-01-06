const { Produto, Cliente, sequelize } = require('../Models/Cliente');

const clientesController = {
    clientes: async(req, res) => {
        let clientes = await Cliente.findAll();
        return res.json(clientes);
    },
    /* registrarcliente: (req, res) => {
        return res.render('registrarcliente')
    }, */
    registrarcliente: async(req, res) => {
        const {
            nome,
            razao_social,
            cpf_cnpj,
            rua,
            numero,
            complemento,
            bairro,
            cidade,
            cep,
            uf,
            telefone,
            whatsapp,
            email,
            site
        } = req.body;
        
        const newClientes = await Cliente.create({
            nome,
            razao_social,
            cpf_cnpj,
            rua,
            numero,
            complemento,
            bairro,
            cidade,
            cep,
            uf,
            telefone,
            whatsapp,
            email,
            site
        });
        return res.redirect('/clientes');
    },
    editarperfil: async(req, res) => {
        const {
            nome,
            razao_social,
            cpf_cnpj,
            rua,
            numero,
            complemento,
            bairro,
            cidade,
            cep,
            uf,
            telefone,
            whatsapp,
            email,
            site
        } = req.body;

        const cliente = await Cliente.update({
            nome,
            razao_social,
            cpf_cnpj,
            rua,
            numero,
            complemento,
            bairro,
            cidade,
            cep,
            uf,
            telefone,
            whatsapp,
            email,
            site
        }, {
            where: { id }
        });
        return res.redirect(`/clientes/login`);
    },
    
}

module.exports = clientesController;