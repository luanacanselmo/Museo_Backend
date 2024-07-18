const fs = require('fs').promises; // Usa fs.promises para funciones asíncronas
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
async function actualizarBajaLogica(numeroRegistro) {
  try {
    let piezas = await leerArchivo(DB_PATH);
    const index = piezas.findIndex(p => p.NumeroRegistro == numeroRegistro);
    if (index !== -1) {
      piezas[index].BajaLogica = false;
      await escribirArchivo(DB_PATH, piezas);
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

async function leerArchivo(ruta) {
  try {
    const data = await fs.readFile(ruta, 'utf-8');
    return data ? JSON.parse(data) : [];
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`El archivo ${ruta} no existe. Se creará uno nuevo.`);
      return [];
    }
    throw err;
  }
}

async function escribirArchivo(ruta, datos) {
  try {
    await fs.writeFile(ruta, JSON.stringify(datos, null, 2));
  } catch (err) {
    console.error(`Error al escribir en el archivo ${ruta}:`, err);
    throw err;
  }
}

module.exports = { guardar, obtener, guardarUsuario, getUsuarios, actualizarBajaLogica };
