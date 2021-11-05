// FRONT
document.querySelector(".add").addEventListener("click", function (event) {
    event.preventDefault();
    let nombre = document.querySelector("input[name='nombre']").value;
    let apellido = document.querySelector("input[name='apellido']").value;
    let dni = document.querySelector("input[name='dni']").value;
    let nuevoCliente = { nombre: nombre, apellido: apellido, dni: dni };
    let body = /*BORIS*/JSON.stringify(nuevoCliente);

    //Usamos un fetch en la ruta especificada para enviar la información:
    fetch('/clientes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: body
    }).then(function (response) {
        return response.json()
    }).then(function (res) {
        console.log(res)
    });
})

document.querySelector(".edit").addEventListener("click", function (event) {
    event.preventDefault();
    let createDni = document.querySelector("input[name='createDni']").value;
    let editNombre = document.querySelector("input[name='editNombre']").value;
    let editApellido = document.querySelector("input[name='editApellido']").value;
    let body = JSON.stringify({ dni: createDni, nombre: editNombre, apellido: editApellido });
    console.log(body);
    fetch('/clientes/api/modify/', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: body
    }).then(function (response) {
        return response.json()
    }).then(function (res) {
        console.log(res)
    });
    //f5();
})

document.querySelector(".selectHabit").addEventListener("change", function (event) {
    event.preventDefault();
    let checkDni = document.querySelector("input[name='checkDni']").value;
    let selectHabitacion = document.querySelector("select[name='selectHabit']").value;
    let fechaCheckIn = new Date();
    let checkIn = fechaCheckIn.getFullYear() + '/' + (fechaCheckIn.getMonth() + 1) + '/' + fechaCheckIn.getDate() + ' a las ' + fechaCheckIn.getHours() + ":" + fechaCheckIn.getMinutes();
    let checkOut = "No especificada";
    let body = JSON.stringify({ cliente: checkDni, habitacion: selectHabitacion, fechaCheckIn: checkIn, fechaCheckOut: checkOut });
    console.log(body);
    fetch('/reservas/api/check/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: body
    }).then(function (response) {
        return response.json()
    }).then(function (res) {
        console.log(res)
    });
})

//document.querySelector(".select").disabled = false;

/*function f5() {
            location.reload();
        }*/
