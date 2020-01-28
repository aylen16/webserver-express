/*Para crear una pagina que muestre un hola mundo, colocamos el siguiente codigo dentro del createServer
       res.write('Hola Mundo!');
       res.end();
*/

const http = require('http');

//creamos el server, (devuelve un json):
http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Santino',
        edad: 8,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    res.end();

}).listen(8080);

console.log('Escuchando en el puerto 8080');