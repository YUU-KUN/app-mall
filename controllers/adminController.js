const request = require('supertest')
const express = require('express')
// const app = express()
const router = express.Router()

router.get('/', async (req, res) => {
    const client = request(req.app);
    const produk = await client.get("/produk");
    const kategori = await client.get("/kategori");
    res.json({
        produk:produk.body,
        kategori:kategori.body
    })
})

module.exports = router