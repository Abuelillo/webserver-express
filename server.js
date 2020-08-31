const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers');

//milware
app.use(express.static(__dirname + '/public'));

//experss HBS engine 
hbs.registerPartials(__dirname + '/views/parciales', function(err) {});
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //res.send('Hello World')
    /*let salida = {
        nombre: 'Juan',
        edad: 36,
        url: req.url
    };*/

    res.render('home', {
        nombre: 'Juan'
    });
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/less', (req, res) => {
    res.render('less');
})

/*
app.get('/data', function(req, res) {
    //res.send('Hello World')

    res.send('Hola data');
})
*/

//app.listen(3000)
app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000')
});