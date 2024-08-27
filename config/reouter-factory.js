const express = requiser('express');
const routes = require('./router-files');
const path = require('path');

let app = express();

app.use((_, res, next) => {
    res.set('Access-Controll-Allow-Headers', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    next();
});

app.use(
 express.urlencoded({
    extended: false,    
    }),
)

app.use(express.json());
app.use(express.static('public'));

app.use('/public', express.static(`${__dirname}/public`));

app.use('/public/images', express.static(path.join(__dirname, '..', 'public', 'images')))

routes.forEach(filename => app.use(require(filename)))

app.get('/', (_, res) => res.send('<h1>Olá Mundo</h1>'))

app.get('vies engine', 'ejs');
app.set('views', '.');

module.exports = app;