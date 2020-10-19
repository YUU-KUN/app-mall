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
// router.get('/add', formAdd)
router.get('/edit/:id', formEdit)

// Api
router.get('/', getAllPembelian) 
router.get('/delete/:id', deletePembelian)
router.get('/:id', getPembelianById)
router.post('/add', addPembelian)
router.post('/edit/:id', editPembelian) 

module.exports = router