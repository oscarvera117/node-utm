const model = require('../models/usuario')();

exports.usuario= function(req,res){
    model.find().
    then(function(doc){
      res.render('index', { title: 'CRUD Usuarios', usuarios:doc });
    });
};

exports.nuevoUsuario= function(req,res){
    res.render('agregarUsuario', { title: 'Agregar Usuario' });
};

exports.crearUsuario = function(req, res, nex){
    var Usuario = {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        foto: req.files.foto.name,
        sexo: req.body.sexo,
       };

        //validar si hay archivo
        if (!req.files){
            return res.status(400).send('No hay archivos.');
        }
  
        //seccion subir archivo
        let filToUpload = req.files.foto; 
        filToUpload.mv('public/images/'+req.files.foto.name, function(err) {
        if (err)
            return res.status(500).send(err);
        });
    
       var data = model(Usuario);
       data.save();
       console.log(req.body.nombre);
       res.redirect('/');
}


exports.eliminarUsuario = function(req, res){
    var id = req.params.id;
    console.log(id);
    model.findByIdAndRemove(id).exec();
    res.redirect('/');

}

exports.cargarModificar = function(req, res){
    var id = req.params.id;
    console.log(id);
    model.findById(id, function (err, doc) {
        res.render('modificarUsuario', { title: 'Modificar Usuario', usuario:doc });
    });
}

exports.modificarUsuario = function(req, res){
    var id = req.body.id;

    model.findById(id,function(err, doc){     
      doc.nombre = req.body.nombre;
      doc.apellidos = req.body.apellidos;
      if(req.files.foto != null){
        doc.foto = req.files.foto.name;
        //validar si hay archivo
        if (!req.files){
            return res.status(400).send('No hay archivos.');
        }
        //seccion subir archivo
        let filToUpload = req.files.foto; 
        filToUpload.mv('public/images/'+req.files.foto.name, function(err) {
        if (err)
            return res.status(500).send(err);
        });
      }
      doc.sexo = req.body.sexo;
      doc.save();
      res.redirect('/');
    });
}


