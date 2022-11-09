var express = require('express');
var app = express();
const path = require('path');
app.use(express.json());       
app.use(express.urlencoded()); 

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/html/index.html'));
 
});
app.post("/datos", function (req,res) {
    res.json({
        "Nombre": req.body.nombre,
        "Apellidos": req.body.apellidos,
        "Direccion":req.body.direccion,
        "Telefono": req.body.telefono
    }
    );
});
 

app.listen(3000, function () {
    console.log('Servidor corriendo en el puerto 3000');
});