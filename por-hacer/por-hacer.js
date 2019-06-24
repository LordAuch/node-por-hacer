
const fs = require('fs');
const colors = require('colors');

let toDoList = [];

let guardarDB = () => {

  let data = JSON.stringify(toDoList);

  fs.writeFile('db/data.json', data, (err) => {
  if (err) throw new Error('No se pudo grabar', err);
  console.log('DB actualizada'.yellow);
});
}

const cargarDB = () =>{
  try {
    toDoList = require('../db/data.json');

  } catch (e) {
    toDoList = [];
  }
}

const crear = (descripcion) =>{
  cargarDB();
  porHacer = {
    descripcion,
    completado: false
  };
  toDoList.push(porHacer);
  guardarDB();
  return porHacer;
}

const listar = () =>{
  cargarDB();

console.log(toDoList);
  for(let tarea of toDoList){
    console.log('========'.green, 'Por hacer'.grey,'==========='.green);
    console.log('Descripcion: '.yellow, tarea.descripcion);
    console.log('Completado: '. yellow, tarea.completado);
    console.log('============================'.green);
  }

}

const actualizar = (descripcion, completado) =>{
  cargarDB();

  let index = toDoList.findIndex(tarea => {
    return tarea.descripcion === descripcion;
  })

  if(index >= 0){
    toDoList[index].completado = completado;
    guardarDB();
    return true;
  }else {
    return false;
  }

}

const borrar = (descripcion) => {
  cargarDB();

  let index = toDoList.findIndex(tarea => {
    return tarea.descripcion === descripcion;
  })

  if(index >=0){
      toDoList.splice(index, 1);
      guardarDB();
      return true;
  }else {
    return false;
  }


}

module.exports = {
  crear,
  listar,
  actualizar,
  borrar
}
