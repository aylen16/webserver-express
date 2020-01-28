//archivo de helpers. Funciones suadas en los templates.

const hbs = require('hbs')


hbs.registerHelper('getYear', () => new Date().getFullYear());

hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');

    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
})