class Pieza{
    constructor(nroR, nomP, medidaP, materialOb, fechaAd, formaAdq, añoPi, estadoPi, cantidad, Obse){
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
        this.class="Pieza";
    }
    static fromJSON(json){
        if(json.class == "Pieza"){
            let nuevaPieza = new Pieza();
            nuevaPieza.nombre = json.NumeroRegistro;
            nuevaPieza.usuario = json.NombrePieza;
            nuevaPieza.pass = json.MedidaPieza;
            nuevaPieza.token = json.MaterialObjeto;
            nuevaPieza.perfil = json.FechaAdquisicion;
            nuevaPieza.class = json.FormaAdquirida;
            nuevaPieza.class = json.AñoPieza;
            nuevaPieza.class = json.EstadoPieza;
            nuevaPieza.class = json.Cantidad;
            nuevaPieza.class = json.Observacion;
            nuevaPieza.class = json.class;

            return nuevaPieza;
        }
    
}
}
class Usuario{
    constructor(nombre, usuario, pass, token, perfil){
        this.nombre = nombre;
        this.usuario = usuario;
        this.pass = pass;
        this.token = token;
        this.perfil = perfil;
        this.class = "Usuario";
    }

    static fromJSON(json){
        if(json.class == "Usuario"){
            let nuevoUsuario = new Usuario();
            nuevoUsuario.nombre = json.nombre;
            nuevoUsuario.usuario = json.usuario;
            nuevoUsuario.pass = json.pass;
            nuevoUsuario.token = json.token;
            nuevoUsuario.perfil = json.perfil;
            nuevoUsuario.class = json.class;
            
            return nuevoUsuario;
        }

    }
}

class Perfil {
    constructor(){
        this.cuso = []
    }

    addCasoUso(cu){
        this.cuso.push(cu);
    }

    delCasoUso(cu){
        if(this.cuso.includes(cu)){
            let tmpCuso = this.cuso.filter(x=>x != cu)
            this.cuso = tmpCuso;
        }
    }
}

module.exports = {Pieza, Usuario, Perfil}

