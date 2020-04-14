const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

const comando = argv._[0];
switch (comando) {
    case 'crear':
            let tarea = porHacer.crear(argv.descripcion);
            console.log(tarea);
        break;
    case 'listar':
            console.log('==== TODO list ===='.green);
            for (let tarea of porHacer.getListado()) {
                console.log(` + ${tarea.descripcion}. Completado: ${tarea.completado}`.green);
            }
            console.log('==================='.green);
        break;
    case 'actualizar':
        let resultado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(resultado);
        if (resultado) {
            console.log('Nota actualizada correctamente'.green);
        } else {
            console.log(`No existe la nota ${argv.descripcion}`.yellow);
        }
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado) {
            console.log(`${argv.descripcion} borrado`.green);
        } else {
            console.log(`${argv.descripcion} no existe`.yellow);
        }
        break;   
    default:
        console.log('Comando no reconocido');
        return;
}