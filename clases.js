class Pieza {
    constructor(nroR, nomP, medidaP, materialOb, fechaAd, formaAdq, añoPi, estadoPi, cantidad, Obse) {
        this.NumeroRegistro = nroR;
        this.NombrePieza = nomP;
        this.MedidaPieza = medidaP;
        this.MaterialObjeto = materialOb;
        this.FechaAdquisicion = fechaAd;
        this.FormaAdquirida = formaAdq;
        this.AñoPieza = añoPi;
        this.EstadoPieza = estadoPi;
        this.Cantidad = cantidad;
        this.Observacion = Obse;
        this.class = "Pieza";
    }

    static fromJSON(json) {
        if (json.class == "Pieza") {
            let nuevaPieza = new Pieza();
            nuevaPieza.NumeroRegistro = json.NumeroRegistro;
            nuevaPieza.NombrePieza = json.NombrePieza;
            nuevaPieza.MedidaPieza = json.MedidaPieza;
            nuevaPieza.MaterialObjeto = json.MaterialObjeto;
            nuevaPieza.FechaAdquisicion = json.FechaAdquisicion;
            nuevaPieza.FormaAdquirida = json.FormaAdquirida;
            nuevaPieza.AñoPieza = json.AñoPieza;
            nuevaPieza.EstadoPieza = json.EstadoPieza;
            nuevaPieza.Cantidad = json.Cantidad;
            nuevaPieza.Observacion = json.Observacion;
            nuevaPieza.class = json.class;
            return nuevaPieza;
        }
    }
}



class Prestamo{

   constructor(idPres, eventoPre, obsePre, fechaPre, idPieza){
        this.idPrestamo = idPres;
        this.eventoPrestamo = eventoPre;
        this.observacionPrestamo = obsePre;
        this.fechaPrestamo = fechaPre;
        this.idPieza = idPieza; 
        this.class = "Prestamo";

   }

   static fromJSON(json){

    if(json.class == "Prestamo"){

        let nuevoPrestamo = new Prestamo();

        nuevoPrestamo.idPrestamo = json.idPrestamo;
        nuevoPrestamo.eventoPrestamo = json.eventoPrestamo;
        nuevoPrestamo.observacionPrestamo = json.observacionPrestamo;
        nuevoPrestamo.fechaPrestamo = json.fechaPrestamo;
        nuevoPrestamo.idPieza = json.idPieza;
        nuevoPrestamo.class = json.class;
        return nuevoPrestamo;

    }

   }

}


class Prestamoestado{
    
    constructor(idPrEs, band, estadoPi){

        this.idPrestamoEstado = idPrEs;
        this.bandera = band;
        this.estadoPieza = estadoPi;
        this.class = "Prestamoestado"

    }
    
    static fromJSON(json){

        if(json.class == "Prestamoestado"){

            let NuevoPresEstado = new Prestamoestado();

            NuevoPresEstado.idPrestamoEstado = json.idPrestamoEstado;
            NuevoPresEstado.bandera = json.bandera;
            NuevoPresEstado.estadoPieza = json.estadoPieza;
            return NuevoPresEstado; 

        }

    }
}





class Taxidermia {

    constructor(idTax, fechaM, obseTax, idPieza){

        this.idTaxidermia = idTax;
        this.fechaMantenimiento = fechaM;
        this.observacionTaxidermia = obseTax;
        this.idPieza = idPieza;
        this.class == "Taxidermia";
    }

    static fromJSON(json){

        if(json.class == "Taxidermia"){

        let nuevoTaxi = new Taxidermia();

        nuevoTaxi.idTaxidermia = json.idTaxidermia;
        nuevoTaxi.fechaMantenimiento = json.fechaMantenimiento;
        nuevoTaxi.observacionTaxidermia = json.observacionTaxidermia;
        nuevoTaxi.idPieza = json.idPieza;
        return nuevoTaxi;

        }

    }

}





class Piezaestado{

    constructor(idPEs, ban){
        this.idPiezaEstado = idPEs;
        this.bandera = ban;
        this.class == "Piezaestado" 

    }

    static fromJSON(json){

        
        if(json.class == "Piezaestado"){
        let NuevoPiezaEstado = new Piezaestado();
           
            NuevoPiezaEstado.idPiezaEstado = json.idPiezaEstado;
            NuevoPiezaEstado.bandera = json.Bandera; 
            return NuevoPiezaEstado;
        } 
            
    }
 }




 class EstadiPieza{
    constructor(idEP, fechaEP, idPieza, idPE){
        this.idEstadoPieza = idEP;
        this.fechaEstado = fechaEP;
        this.idPieza = idPieza;
        this.idPiezaEstado = idPE;
        this.class == "estadiPieza";
    }

    static fromJSON(json){

        if(json.class == "estadiPieza"){

            let NuevoEstadiPieza = new estadiPieza();
            
            NuevoEstadiPieza.idEstadoPieza = json.idEstadoPieza;
            NuevoEstadiPieza.fechaEstado = json.fechaEstado;
            NuevoEstadiPieza.idPieza = json.idPieza;
            NuevoEstadiPieza.idPiezaEstado = json.idPiezaEstado;
            return NuevoEstadiPieza;

        }
    }

 }

 
 
  
class Usuario {
    constructor(nombre, usuario, pass, token, perfil) {
        this.nombre = nombre;
        this.usuario = usuario;
        this.pass = pass;
        this.token = token;
        this.perfil = perfil;
        this.class = "Usuario";
    }

    static fromJSON(json) {
        if (json.class === "Usuario") {
            return new Usuario(
                json.nombre,
                json.usuario,
                json.pass,
                json.token,
                json.perfil
            );
        }
    }
}
/*
class Perfil {
    constructor() {
        this.cuso = [];
    }

    addCasoUso(cu) {
        this.cuso.push(cu);
    }

    delCasoUso(cu) {
        this.cuso = this.cuso.filter(x => x !== cu);
    }
}*/

module.exports = { Pieza, Prestamo, Taxidermia , EstadiPieza, Piezaestado, Prestamoestado};
