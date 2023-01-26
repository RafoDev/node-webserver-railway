const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));

// ROUTES
app.get('/', (req,res) => {
    res.render('home', {
        nombre : 'Rafael',
        titulo: 'Curso de Node'
    });
})
app.get('/generic', (req,res) => {
    res.render('generic', {
        titulo: 'Generic'
    });
})
app.get('/elements', (req,res) => {
    res.render('elements', {
        titulo: 'Elements'
    });
})
app.get('*', (req,res) => {
    res.send('404 | PAGE NOT FOUND');
})

app.listen(port, () => {
    console.log(`Server listening at localhost:${port}`);
})
