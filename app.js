
require ('./models/dbConnect')

const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const path = require('path')

var session = require('express-session')
const exampleRouter = require('./controllers/example.Controller');
const exampleUtils = require('./utils/example.Utils')
const routerProduk = require('./controllers/routerProduk');
const Distributor = require('./controllers/distributorController');
const Kurir = require('./controllers/kurirController');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
}); //PENTING - Mencegah CSRF Attack



app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'views/template'))
// app.use(express.static('views/template'));


// app.set('view engine', 'pug');
app.use(express.static('views'));

app.use(session({
    secret: 'secrett',
    resave: true,
    saveUninitialized: true
}));

app.use('/', exampleRouter);
// app.use('/admin',exampleUtils,exampleRouter);
app.use('/distributor', Distributor);
app.use('/kurir', Kurir);

app.use('/produk', routerProduk);

app.listen(process.env.PORT || 3000,() => {
    console.log(`App Started on PORT ${process.env.PORT || 3000}`);
});
