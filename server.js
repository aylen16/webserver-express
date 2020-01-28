const express = require('express')
const app = express()

const hbs = require('hbs')

//definimos el archivo donde estan los helpers
require('./hbs/helpers')

//Como subimos el proyecto a un server, el puerto no es siempre fijo, por lo que si esta localmente
//va a ser 3000 pero si esta corriendo en el server toma el valor del objeto global process
const port = process.env.PORT || 3000;

//definimos un middleware para hacer una carpeta publica, y que cualquier url que se pida dentro de esa carpeta sea accesible.
//De este modo las url: localhost:3000, localhost:3000/home.html son accesibles. (sin el .html no funciona!).
app.use(express.static(__dirname + '/public'));

//definimos donde van a estar los partials (bloques de codigo html)
hbs.registerPartials(__dirname + '/views/parciales')

//para especificar que se va a usar un template con hbs, para generar un archivo dinamico:

app.set('view engine', 'hbs');

//como estamos usando un template engine, podemos renderizar la pagina del siguiente modo:
//cualquier peticion que entre por /, va a renderizar el home.

app.get('/', (req, res) => {

    res.render('home', { nombre: 'santino blanco' })
})

app.get('/about', (req, res) => {

    res.render('about')
})

app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${port}`));