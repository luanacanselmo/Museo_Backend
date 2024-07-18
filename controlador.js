const Clases = require("./clases.js");
const Modelo = require("./modelo.js");

function nuevoUser(data) {
  console.log("--nuevo(data)-->[controlador]");
  console.log(data);
  let unUser = new Clases.Usuario(
    data.nombre,
    data.usuario,
    data.pass,
    data.token,
    data.perfil,
  );
  console.log('Usuario creado:', unUser);
  const guardarExitoso = Modelo.guardarUsuario(unUser);
  console.log('Operación de guardar:', guardarExitoso);
  return guardarExitoso;
}

function nuevo(data) {
  console.log("--nuevo(data)-->[controlador]");
  console.log(data);
  let BajaLogica = data.BajaLogica === 'true'

  let miPieza = new Clases.Pieza(
      data.NumeroRegistro,
      data.NombrePieza,
      data.MedidaPieza,
      data.MaterialObjeto,
      data.FechaAdquisicion,
      data.FormaAdquirida,
      data.AñoPieza,
      data.EstadoPieza,
      data.Cantidad,
      data.Observacion,
      BajaLogica

  );

  console.log('Pieza creada:', miPieza);

  const guardarExitoso = Modelo.guardar(miPieza);
  console.log('Operación de guardar:', guardarExitoso);

  return guardarExitoso;
}

function obtener() {
    return Modelo.obtener();
}

function listar(){
   
  return Modelo.obtener();

}

module.exports = {nuevoUser, nuevo, obtener, listar};