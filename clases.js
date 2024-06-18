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
}

module.exports = { Pieza, Usuario, Perfil };
