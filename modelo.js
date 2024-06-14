const fs = require('fs')
const Clases = require('./clases.js')

function guardarUsuario(data){

    let str_usuarios = fs.readFileSync('./db/usuarios.txt','utf-8')
    let usuarios = []
    if(str_usuarios){
        usuarios = JSON.parse(str_usuarios)
    }
    
    usuarios.push(data)
    fs.writeFileSync('./db/usuarios.txt',JSON.stringify(usuarios))
}

function getUsuarios(){    
 
    let str_usuarios = fs.readFileSync('./db/usuarios.txt','utf-8')
    let usuarios = []
    if(str_usuarios){ 
        usuarios = JSON.parse(str_usuarios);
    }
    let objUsuarios = [];
    usuarios.forEach(x=>objUsuarios.push(Clases.Usuario.fromJSON(x)))

    return objUsuarios;

}

function guardar(data){

    let str_pieza = fs.readFileSync('./db.txt','utf-8')
    let piezas = []
    if(str_pieza){
        piezas = JSON.parse(str_pieza)
    }
    
    pieza.push(data)
    fs.writeFileSync('./db.txt',JSON.stringify(pieza))
}

function obtener(){

    let str_piezas = fs.readFileSync('./db.txt','utf-8')
    let piezas = []
    if(str_piezas){
        piezas = JSON.parse(str_piezas)
    }

    return piezas;

}

module.exports = {guardar, obtener, guardarUsuario, getUsuarios}