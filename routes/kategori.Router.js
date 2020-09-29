const express = require('express');
const router = express.Router();

const {
    getKategori,
    addKategori
} = require('../controllers/kategori.controller');

router.get('/', getKategori)
router.post('/', addKategori)

module.exports = router