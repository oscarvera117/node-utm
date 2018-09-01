module.exports = function() {
    var db = require('../lib/db-connection')();
    var Schema = require('mongoose').Schema;

    var Usuario = Schema({
        nombre: String,
        apellidos: String,
        foto: String,
        sexo: String
    });

    return db.model('Usuario', Usuario);
}

