// untuk yang terbiasa pakai controller 
// untuk yang terbiasa pakai controller dan router

const express = require('express')
const router = express.Router()

const Produk = require('../models/modelProduk')
const User = require('../models/user')
const Kurir = require('../models/kurirModel')
const Distributor = require('../models/distributorModel');


//sementara view dashboard admin di sini, since we cannot login as admin
router.get('/admin', async(req, res) => {
    const countProduk = await Produk.countDocuments({})
    const countUser = await User.countDocuments({})
    const countKurir = await Kurir.countDocuments({})
    const countDistributor = await Distributor.countDocuments({})

    res.render('dashboardAdmin', {
        // username: req.session.name,
        username: "Admin",
        // email: req.session.email,
        email: "admin@example.com",

        title: 'Dashboard Admin',
        totalProduk:countProduk,
        totalUser:countUser,
        totalKurir: countKurir,
        totalDistributor: countDistributor

    })
    console.log('render dashboard Admin harusnya');
})

router.get('/user', async(req, res) => {    
    res.render('dashboardUser', {
        // username: req.session.name,
        username: "User",
        // email: req.session.email,
        email: "user@example.com",
        title: 'Dashboard User',
    })
    console.log('render dashboard User harusnya');
})



module.exports = router