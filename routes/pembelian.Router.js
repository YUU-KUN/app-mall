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

// Api
router.get('/', getAllPembelian)
router.get('/:id', getPembelianById)
router.post('/add', addPembelian)
router.put('/edit/:id', editPembelian) 
router.delete('/delete/:id', deletePembelian)

// Add Form
router.get('/add', formAdd)
router.get('/edit', formEdit)


module.exports = router