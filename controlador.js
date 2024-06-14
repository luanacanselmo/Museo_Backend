const Clases = require('./clases.js')
const Modelo = require('./modelo.js')



function nuevo(data){
    console.log("--nuevo(data)-->[controlador]")
    console.log(data);
    let miPieza = new Clases.Pieza(data.NumeroRegistro, data.NombrePieza, data.MedidaPieza, data.MaterialObjeto, data.FechaAdquisicion, data.FormaAdquirida, data.AñoPieza, data.EstadoPieza, data.Cantidad, data.Observacion)
    Modelo.guardar(miPieza);
}

function obtener(){
    return Modelo.obtener();
}

module.exports = {nuevo, obtener}