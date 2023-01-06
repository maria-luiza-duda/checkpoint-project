const { request, response } = require('express');
const { Cliente, Produto, sequelize } = require('../models/Produto');
const { v4: uuidv4 } = require('uuid');

const produtosController = {
    index: async(request, response) => {
        let produtos = await Produto.findAll();
        return response.render('meusprodutos', { listaProdutos: produtos });
    },
    registrarprodutos: (request, response) => {
        return response.render('registrarprodutos', { clientelogin: request.session.clientesOn })
    },
    editarproduto: async(request, response) => {
        const id = request.params
        const editarproduto = await Produto.findOne({
            where: { id }
        });
        return response.json(editarproduto)
    },
    create: async(request, response) => {
        let { id_clientes, id_categorias, nome, descricao, ncm } = request.body;

        let newProduto = await Produto.create({
            id: uuidv4(),
            id_clientes,
            id_categorias,
            nome,
            descricao,
            ncm
        });

        return response.redirect('/produtos/meusprodutos');
    },
    update: async(request, response) => {
        let { id } = request.params;
        let { id_clientes, id_categorias, nome, descricao, ncm } = request.body;
        let updatedProduto = await Produto.update({
            id_clientes,
            id_categorias,
            nome,
            descricao,
            ncm
        }, {
            where: { id }
        })
        return response.redirect('/produtos/meusprodutos');
    },

    delete: async(request, response) => {
        let { id } = request.params
        const deletedProduto = await Produto.destroy({
            where: { id }
        });
        return response.redirect('/produtos/meusprodutos');
    },
    show: async(request, response) => {
        const { id } = request.session.clientesOn;
        const produtosforCliente = await Produto.findAll({
            where: {
                clientes_id: id
            }
        });
        return response.render('registeredProdutos', { listaProdutos: produtosforCliente });
    }

}

module.exports = produtosController;