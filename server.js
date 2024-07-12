const express = require("express");
const path = require('path');
const Handlebars = require('handlebars');
const fs = require('fs');
const Seguridad = require("./seguridad.js");
const Controlador = require('./controlador.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", express.static(path.join(__dirname, "/public")));

app.set("public", path.join(__dirname, "public"));

app.use("/", express.static(path.join(__dirname, "/views")));

app.set("views", path.join(__dirname, "views")); // Ruta a la carpeta "views"

let _url = "http://localhost:" + port;
var objeto = { url: _url };
let destino = { url: "" };

//------------- zona de ruteo ------------------
app.get('/', (req, res) => {
  var archivo = fs.readFileSync('./views/index.hbs', 'utf-8');
  var template = Handlebars.compile(archivo);
  var salida = template(objeto);
  res.send(salida);
});

app.post('/login', (req, res) => {
  console.log("browser --> server 'post/login'");
  console.log("server --> seguridad 'registrado(req.body)'");

  let registrado = Seguridad.registrado(req.body);

  if (registrado == true) {
    console.log("server <-r- seguridad 'true'");
    const piezas = Controlador.listar();
    var archivo = fs.readFileSync('./views/menu.hbs', 'utf-8');
    var template = Handlebars.compile(archivo);
    var salida = template({ objeto, piezas: piezas });
    res.send(salida);
    console.log("browser <-r- server 'menu.hbs'");
  } else {
    console.log("server <-r- seguridad 'false'");
    console.log("browser <-r- server 'Error...!!!.html'");
    res.send("<p>Error...!!!</p>");
  }
});

app.get('/menu', (req, res) => {
  const piezas = Controlador.listar();
  var archivo = fs.readFileSync('./views/menu.hbs', 'utf-8');
  var template = Handlebars.compile(archivo);
  var salida = template({ objeto, piezas: piezas });
  res.send(salida);
});

app.get('/inicio', (req, res) => {
  var archivo = fs.readFileSync('./views/inicio.hbs', 'utf-8');
  var template = Handlebars.compile(archivo);
  var salida = template(objeto);
  res.send(salida);
});

app.get('/nuevo', (req, res) => {
  console.log("llegó un post/nuevo");
  var archivo = fs.readFileSync('./views/nuevo.hbs', 'utf-8');
  var template = Handlebars.compile(archivo);
  var salida = template(objeto);
  res.send(salida);
});

app.get('/registrar', (req, res) => {
  console.log("llegó un post/nuevo");
  var archivo = fs.readFileSync('./views/registro.hbs', 'utf-8');
  var template = Handlebars.compile(archivo);
  var salida = template(objeto);
  res.send(salida);
});

app.post('/agregarUser', (req, res) => {
  console.log("llegó post/agregar");
  console.log(req.body);
  const operacionExitosa = Controlador.nuevoUser(req.body);
  console.log('Operación exitosa:', operacionExitosa);
  if (operacionExitosa) {
    console.log('Redirigiendo a la ruta principal...');
    res.redirect('/');
  } else {
    console.log('Error al guardar los datos');
    res.send('Error al guardar los datos');
  }
});

app.post('/agregar', (req, res) => {
  console.log("llegó post/agregar");
  console.log(req.body);

  const operacionExitosa = Controlador.nuevo(req.body);
  console.log('Operación exitosa:', operacionExitosa);

  if (operacionExitosa) {
    console.log('Redirigiendo a la ruta principal...');
    res.redirect('/menu');
  } else {
    console.log('Error al guardar los datos');
    res.send('Error al guardar los datos');
  }
});

app.get('/listar', (req, res) => {
  const piezas = Controlador.listar();
  try {
    var archivo = fs.readFileSync('./views/listar.hbs', 'utf-8');
    var template = Handlebars.compile(archivo);
    var salida = template({ url: `http://localhost:${port}`, piezas: piezas });
    res.send(salida);
  } catch (err) {
    console.error('Error al leer el archivo listar.hbs:', err);
    res.status(500).send('Error interno del servidor');
  }
});

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});
