const express = require('express');
const router = express.Router();

const {
    formAdd,
    formEdit,
    getAllPembelian,
    getPembelianById,
    addPembelian,
    editPembelian,
    deletePembelian
} = require('../controllers/pembelian.controller');

// Add Form
router.get('/add', formAdd)
router.get('/edit/:id', formEdit)

// Api
router.get('/', getAllPembelian) 
router.get('/:id', getPembelianById)
router.post('/add', addPembelian)
router.put('/edit/:id', editPembelian) 
router.delete('/delete/:id', deletePembelian)

module.exports = router