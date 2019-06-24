

const descripcion = {
  alias: 'd',
  demand: true,
  desc:  'Descripcion de la tarea por hacer'
}

const completado = {
  alias: 'c',
  default: true,
  desc:  'Marca como completado o pendiente la tarea'
}


const argv = require('yargs')
        .command('crear', 'Crea una nueva tarea por hacer', {
          descripcion
        })
        .command('actualizar', 'Actualiza una tarea por hacer', {
          descripcion,
          completado
        })
        .command('borrar', 'Elimina una tarea por hacer de la lista', {
          descripcion
        })
        .help()
        .argv;

module.exports = {
  argv
}
