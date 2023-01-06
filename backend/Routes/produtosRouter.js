var express = require('express');
const produtosController = require('../Controller/produtosController');
var router = express.Router();

/* GET produtos listing. */
router.get('/meusprodutos', produtosController.index);
router.get('/registrarprodutos', produtosController.registrarprodutos);
router.get('/editarproduto', produtosController.editarproduto);
router.post('/', produtosController.create);
router.update('/:id', produtosController.update);
router.delete('/:id', produtosController.delete);

module.exports = router;