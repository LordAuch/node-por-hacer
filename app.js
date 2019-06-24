
const {argv} = require('./config/yargs');
const {crear, listar, actualizar, borrar} = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
  case 'crear':
    let tarea = crear(argv.descripcion);
    console.log(tarea);
  break;
  case 'listar':
    listar();
  break;
  case 'actualizar':
    let actualizado = actualizar(argv.descripcion, argv.completado);
    console.log(actualizado);
  break;
  case 'borrar':
    let borrado = borrar(argv.descripcion);
    console.log(borrado);
  break;
  default:
  console.log(`'${comando}' No se reconoce como un comando`);
}
