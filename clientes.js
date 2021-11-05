// BACK
const express = require("express");
const router = express.Router();

router.get('/', function (req, res) {
    // "let db = req.app.locals.db" es necesaria en cada método de la ruta para que funcione:
    let db = req.app.locals.db;
    db.collection('hotel.clientes').find().toArray(function (err, datos) {
        if (err != undefined) {
            console.log(err);
            res.send({ mensaje: 'error: ' + err });
        } else {
            //console.log(datos);
            res.send(datos);
        }
    });
});

router.post('/', function (req, res) {
    let db = req.app.locals.db;
    let nombreVar = req.body.nombre;
    let apellidoVar = req.body.apellido;
    let dniVar = req.body.dni;
    db.collection('hotel.clientes').insertOne({
        nombre: nombreVar,
        apellido: apellidoVar,
        dni: dniVar,
    }, function (err, datos) {
        if (err != undefined) {
            console.log(err);
            res.send({ mensaje: 'error: ' + err });
        } else {
            //console.log(datos);
            res.send(datos + print01);
        }
    })
})

router.put('/api/modify/', function (req, res) {
    let db = req.app.locals.db;
    let createDni = req.body.dni;
    let editNombre = req.body.nombre;
    let editApellido = req.body.apellido;
    db.collection('hotel.clientes').updateMany(
        { dni: createDni },
        { $set: { apellido: editApellido, nombre: editNombre }, },
        function (err, datos) {
            if (err !== undefined) {
                console.log(err);
                res.send({ mensaje: "error" + err });
            } else {
                res.send(datos);
            }
        })
})


module.exports = router;