// BACK
const express = require("express");
const router = express.Router();

router.post('/api/check/', function (req, res) {
    let db = req.app.locals.db;
    let reservaCliente = req.body.cliente;
    let reservaHabitacion = req.body.habitacion;
    let reservaCheckIn = req.body.fechaCheckIn;
    let reservaCheckOut = req.body.fechaCheckOut;
    db.collection('hotel.reservas').insertOne({
        cliente: reservaCliente,
        habitacion: reservaHabitacion,
        fechaCheckIn: reservaCheckIn,
        fechaCheckOut: reservaCheckOut,
    }, function (err, datos) {
        if (err != undefined) {
            console.log(err);
            res.send({ mensaje: 'error: ' + err });
        } else {
            console.log(datos);
            res.send(datos);
        }
    }

    )
})

module.exports = router;