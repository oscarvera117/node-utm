var express = require('express');
var router = express.Router();

var usuarioController = require('../controllers/usuario_controller');


//Aplicacion de Controllers //obtener lista usuarios
router.get('/', usuarioController.usuario);

//Aplicacion de Controllers //ir a pagina crear usuario
router.get('/agregarUsuario', usuarioController.nuevoUsuario);

//Aplicacion de Controllers //accion crear usuario
router.post('/agregarUsuario', usuarioController.crearUsuario);

//Aplicacion de Controllers //eliminar usuario
router.get('/eliminarUsuario/:id', usuarioController.eliminarUsuario);

//Aplicacion de Controllers //cargar usuario seleccionad
router.get('/modificarUsuario/:id', usuarioController.cargarModificar);

//Aplicacion de Controllers //accion modificar libro 
router.post('/modificarUsuario', usuarioController.modificarUsuario);


module.exports = router;
