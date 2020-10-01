const request = require('supertest')
const express = require('express')
const router = express.Router()

const Produk = require('../models/modelProduk')
const User = require('../models/user')
const Kurir = require('../models/kurirModel')
const Distributor = require('../models/distributorModel');

router.get('/', async (req, res) => {
    const countProduk = await Produk.countDocuments({})
    const countUser = await User.countDocuments({})
    const countKurir = await Kurir.countDocuments({})
    const countDistributor = await Distributor.countDocuments({})
    // console.log(countDistributor)

    res.status(200).json({
        nama:req.session.nama,
        totalProduk:countProduk,
        totalUser:countUser,
        totalKurir: countKurir,
        totalDistributor: countDistributor
    })
})

module.exports = router