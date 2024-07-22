const fs = require('fs'); // Usa fs.promises para funciones asíncronas
const Clases = require('./clases.js');

const DB_PATH = './db.txt';
const USUARIOS_PATH = './db/usuarios.txt';

function guardarUsuario(data) {
  let str_usuarios = fs.readFileSync('./db/usuarios.txt', 'utf-8');
  let usuarios = [];
  if (str_usuarios) {
    usuarios = JSON.parse(str_usuarios);
    console.log('Piezas existentes:', usuarios);
  }
  console.log('Nuevo Usuario:', data);
  usuarios.push(data);
  console.log('Usuario después de agregar:', usuarios);
  try {
    fs.writeFileSync('./db/usuarios.txt', JSON.stringify(usuarios));
    console.log('Datos guardados en ./db/usuarios.txt');
    return true;
  } catch (err) {
    console.error('Error al guardar los datos:', err);
    return false;
  }
}

function getUsuarios() {
    let str_usuarios = fs.readFileSync('./db/usuarios.txt', 'utf-8');
    let usuarios = [];
    if (str_usuarios) {
        usuarios = JSON.parse(str_usuarios);
    }
    let objUsuarios = [];
    usuarios.forEach(x => objUsuarios.push(Clases.Usuario.fromJSON(x)));

    return objUsuarios;
}

function guardar(data) {
    let str_piezas = fs.readFileSync('./db.txt', 'utf-8');
    let piezas = [];
    if (str_piezas) {
        piezas = JSON.parse(str_piezas);
        console.log('Piezas existentes:', piezas);
    }

    console.log('Nueva pieza:', data);
    piezas.push(data);
    console.log('Piezas después de agregar la nueva:', piezas);

    try {
        fs.writeFileSync('./db.txt', JSON.stringify(piezas));
        console.log('Datos guardados en db.txt');
        return true;
    } catch (err) {
        console.error('Error al guardar los datos:', err);
        return false;
    }
}

function obtener() {
    let str_piezas = fs.readFileSync('./db.txt', 'utf-8');
    let piezas = [];
    if (str_piezas) {
        piezas = JSON.parse(str_piezas);
    }

    return piezas;
}

// baja lógica
function actualizarBajaLogica(numeroRegistro) {
  try {
    let piezas =  obtener();
    const index = piezas.findIndex(p => p.NumeroRegistro == numeroRegistro);
    if (index !== -1) {
      piezas[index].BajaLogica = false;
      guardar(piezas);
      console.log(`Pieza con número de registro ${numeroRegistro} marcada como eliminada lógicamente.`);
      return true;
    } else {
      console.log(`No se encontró la pieza con número de registro ${numeroRegistro}.`);
      return false;
    }
  } catch (err) {
    console.error('Error al actualizar baja lógica:', err);
    return false;
  }
}

function guardarPrestamo(data) {
  let str_prestamo = fs.readFileSync('./db/prestamo.txt', 'utf-8');
  let prestamo = [];
  if (str_prestamo) {
    prestamo = JSON.parse(str_prestamo);
      console.log('Piezas existentes:', prestamo);
  }

  console.log('Nueva prestamo:', data);
  prestamo.push(data);
  console.log('prestamo después de agregar la nueva:', prestamo);

  try {
      fs.writeFileSync('./db/prestamo.txt', JSON.stringify(piezas));
      console.log('Datos guardados en prestamo.txt');
      return true;
  } catch (err) {
      console.error('Error al guardar los datos:', err);
      return false;
  }
}

function obtenerPrestamo() {
  let str_prestamo = fs.readFileSync('./db/prestamo.txt', 'utf-8');
  let prestamo = [];
  if (str_prestamo) {
    prestamo = JSON.parse(str_prestamo);
  }

  return prestamo;
}


module.exports = { guardar, obtener, guardarUsuario, getUsuarios, guardarPrestamo, obtenerPrestamo, actualizarBajaLogica };
