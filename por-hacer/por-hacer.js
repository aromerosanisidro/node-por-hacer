const fs = require('fs');
let arr = [];
const guardarDB = () => {
    const data = JSON.stringify(arr);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) {
            throw new Error(`No se pudo actualizar la nota requerida`, err);
        }
    });
};

const cargarDB = () => {
    try {
        arr = require('../db/data.json');
    } catch (error) {
        arr = [];
    }
};


const crear = (descripcion) => {
    let item = {
        descripcion,
        completado: false
    }

    cargarDB();
    arr.push(item);
    guardarDB();
    return item;
};

const getListado = () => {
    cargarDB();
    return arr;
};


const actualizar = (desc, completado) => {
    cargarDB();
    let item = arr.find(t => t.descripcion == desc);
    if (item) {
        item.completado = completado;
        guardarDB();
        return true;
    }
    return false;
};

const borrar = (desc) => {
    cargarDB();
    const ix = arr.findIndex(t => t.descripcion == desc);
    if (ix >= 0) {
        let item = arr.splice(ix, 1);
        guardarDB();
        return item;
    }
    return false;
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};