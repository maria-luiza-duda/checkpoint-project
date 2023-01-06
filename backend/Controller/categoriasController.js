/* const { Categoria, sequelize } = require('../models');
const { v4:uuidv4 } = require('uuid');

const categoriasController = {
    index: async (req, res) => {
        let categorias = await Categoria.findAll();
        return res.json(categorias);
    },

    create: async (req, res) => {
        const { nomeCategorias } = req.body;
        const newCategorias = await Categoria.create({
            id: uuidv4(),
            nomeCategorias
        });
        return res.json(newCategorias);
    },

    update: async (req, res) => {
        const { id } = req.params;
        const { nomeCategorias } = req.body;
        const categoria = await Categoria.update({
            nomeCategorias
        }, {
            where: { id }
        });
        return res.json(categoria);
    },

    delete: async (req, res) => {
        const { id } = req.params;
        const categorias = await Categoria.destroy({
            where: { id }
        });
        return res.json(categorias);
    }

}

module.exports = categoriasController; */