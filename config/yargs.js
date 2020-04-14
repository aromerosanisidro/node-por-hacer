const descripcionFlag = {
    alias: 'd',
    demand: true,
    desc: 'Contenido de la nota'
};

const argv = require('yargs')
    .command('crear', 'Crea una nota TODO', {
        descripcion: descripcionFlag
    })
    .command('borrar', 'Borra una nota TODO', {
        descripcion: descripcionFlag
    })
    .command('actualizar', 'Actualiza una nota TODO', {
        descripcion: descripcionFlag,
        completado: {
            default: true,
            alias: 'c',
            desc: 'Indica si completado (true/false)'
        }
    })
    .help().argv;

module.exports = {
    argv
};