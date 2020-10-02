const request = require('supertest')
const express = require('express')

const Produk = require('../models/modelProduk')
const User = require('../models/user')
const router = express.Router()

router.get('/', async (req, res) => {
    const countProduk = await Produk.countDocuments({})
    const countUser = await User.countDocuments({})
    res.status(200).json({
        nama:req.session.nama,
        totalProduk:countProduk,
        totalUser:countUser
    })
})

module.exports = router