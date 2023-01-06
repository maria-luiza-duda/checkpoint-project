var express = require('express');
const clientesController = require('../Controller/clientesController');
var router = express.Router();

/* GET clientes listing. */
router.get('/clientes', clientesController.clientes);
router.post('/registrarcliente', clientesController.registrarcliente);
router.get('/editarperfil', clientesController.editarperfil);
//router.post('/', clientesController.create);

module.exports = router;