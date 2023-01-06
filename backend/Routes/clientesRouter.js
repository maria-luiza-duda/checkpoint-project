var express = require('express');
const clientesController = require('../Controller/clientesController');
var router = express.Router();

/* GET clientes listing. */
router.get('/', clientesController.index);
router.get('/registrarcliente', clientesController.registrarcliente);
router.get('/editarperfil', clientesController.editarperfil);
router.get('/login', clientesController.login)
router.get('/logout', clientesController.logout);
router.get('/updatepage', clientesController.updatepage);
router.post('/', clientesController.create);
router.put('/:id', clientesController.update);
router.delete('/:id', clientesController.delete);

module.exports = router;