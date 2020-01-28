/*
Para crear una pagina que muestre hola mundo, dentro de la funcion definida en el get:
    res.send('Hola Mundo')

*/

const express = require('express')
const app = express()

app.get('/', (req, res) => {

    let salida = {
        nombre: 'Santino',
        edad: 8,
        url: req.url
    }

    res.send(salida);
})

app.listen(3000, () => console.log('Escuchando peticiones en el puerto 3000'))