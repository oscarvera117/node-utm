var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render("index", {title:'Calcular IMC', message: 'Bienvenido' });
});

router.post('/', function(req, res, next) {
    var peso = req.body.peso;
    var altura = req.body.altura;

    var imc = peso / Math.pow(altura,2);
    imc = imc.toFixed(2);

    var mensaje="";

    if(imc < 16){
        mensaje = "Infrapeso: delgadez severa, IMC: "+imc;
    }
    if(imc >=16 && imc < 16.99){
        mensaje ="Infrapeso: delgadez moderada, IMC: "+imc;
    }
    if(imc >=17 && imc < 18.49){
        mensaje ="Infrapeso: delgadez aceptable, IMC: "+imc;
    }
    if(imc >=18.50 && imc < 24.99){
        mensaje ="Peso normal, IMC: "+imc;
    }
    if(imc >=25.00 && imc < 29.99){
        mensaje ="Sobrepeso, IMC: "+imc;
    }
    if(imc >=30.00 && imc < 34.99){
        mensaje ="Obeso: tipo 1, IMC: "+imc;
    }
    if(imc >=35.00 && imc < 40.00){
        mensaje ="Obeso: tipo 2, IMC: "+imc;
    }
    if(imc > 40.00){
        mensaje ="Obeso: tipo 3, IMC: "+imc;
    }

    
    
    if(imc >=18.50 && imc < 24.99){
      res.render("index", {title:'Calcular IMC', status:1, message: mensaje });
    }else{
      res.render("index", {title:'Calcular IMC', status:0, message: mensaje });
    }
   
});


module.exports = router;
