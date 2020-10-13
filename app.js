require ('./models/dbConnect')

const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const path = require('path')

var session = require('express-session')

const userauth = require('./controllers/userauth');
const auth = require('./utils/authlogin')

const exampleRouter = require('./controllers/example.Controller');
//const exampleUtils = require('./utils/example.Utils')

const routerProduk = require('./controllers/routerProduk');
const Distributor = require('./controllers/distributorController');
const Kurir = require('./controllers/kurirController');
const Agen = require('./controllers/agenController');
const kategori = require('./controllers/kategoriController');
const pembelian = require('./routes/pembelian.Router');
const penjualan = require('./routes/penjualan.Router');
const request = require("supertest");
const admin = require('./controllers/adminController')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
}); //PENTING - Mencegah CSRF Attack


app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'views/public'))
app.use(express.static(__dirname + '/public'));

app.use(session({
    secret: 'secrett',
    resave: true,
    saveUninitialized: true
}));

app.use('/', userauth);
app.use('/admin',admin);

// app.use('/example', exampleRouter);
// app.use('/admin',exampleUtils,exampleRouter);

app.use('/distributor', Distributor);
app.use('/kurir', Kurir);
app.use('/agen', Agen);
app.use('/kategori',kategori)
app.use('/produk', routerProduk);


app.use('/pembelian', pembelian);
app.use('/penjualan', penjualan);

app.listen(process.env.PORT || 3000,() => {
    console.log(`App Started on PORT ${process.env.PORT || 3000}`);
});