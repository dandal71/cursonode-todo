const fs = require("fs");
const colors = require("colors");

let listado = [];


let actualizar = async(descripcion, completado = true) => {
    cargarBD();
    let index = listado.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listado[index].completado = completado;
        guardaBD();
        return listado[index];
    } else {
        throw new Error(`Tarea no encontrada: ${descripcion}`);
    }

}

let eliminar = async(descripcion) => {
    cargarBD();
    let nuevoListado = listado.filter(tarea => tarea.descripcion !== descripcion);
    if (listado.length !== nuevoListado.length) {
        listado = nuevoListado;
        guardaBD();
        return true;
    } else {
        throw new Error(`Tarea no encontrada al eliminar: ${descripcion}`);
    }

}

let listar = () => {
    cargarBD();
    return listado;
}

let cargarBD = () => {
    try {
        listado = require('../tareasBD.json');
    } catch (error) {
        lilstado = [];
    }

}


let guardaBD = () => {
    let data = JSON.stringify(listado);
    fs.writeFile(`./tareasBD.json`, data, (err) => {
        if (err)
            return err;
        console.log("Archivo creado con las tareas");
    });
}



let crearTarea = (descripcion) => {
    cargarBD();
    let tarea = {
        descripcion, //como es igual al nombre del parámetro no hace falta poner :descripcion
        completado: false
    };

    listado.push(tarea);

    return tarea;
}

module.exports = {
    crearTarea,
    guardaBD,
    listar,
    actualizar,
    eliminar,
}