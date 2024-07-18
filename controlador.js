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


//baja logica
async function eliminarPieza(req, res) {
  const { numeroRegistro } = req.params;
  try {
    const resultado = await Modelo.actualizarBajaLogica(numeroRegistro);
    if (resultado) {
      res.json({ success: true, message: 'Pieza eliminada lógicamente' });
    } else {
      res.status(404).json({ success: false, message: 'Pieza no encontrada' });
    }
  } catch (error) {
    console.error('Error al eliminar la pieza:', error);
    res.status(500).json({ success: false, message: 'Error al eliminar la pieza' });
  }
}




module.exports = {nuevoUser, nuevo, obtener, listar, eliminarPieza};

