
const express = require('express')
const app = express()
require ('./models/dbConnect')
const bodyParser = require("body-parser");
var session = require('express-session')
const exampleRouter = require('./controllers/example.Controller');
const exampleUtils = require('./utils/example.Utils');
const Distributor = require('./controllers/distributorController');
const Kurir = require('./controllers/kurirController');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'pug');
app.use(express.static('views'));

app.use(session({
    secret: 'secrett',
    resave: true,
    saveUninitialized: true
}));

// app.use('/', exampleRouter);
// app.use('/admin',exampleUtils,exampleRouter);
app.use('/distributor', Distributor);
app.use('/kurir', Kurir);

app.listen(process.env.PORT || 3000,() => {
    console.log(`App Started on PORT ${process.env.PORT || 3000}`);
});
