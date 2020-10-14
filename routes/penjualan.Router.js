const express = require('express');
const router = express.Router();

const {
    formAdd,
    formEdit,
    getAllPenjualan,
    getPenjualanById,
    addPenjualan,
    editPenjualan,
    deletePenjualan
} = require('../controllers/penjualan.controller');

// Api
router.get('/', getAllPenjualan)
router.get('/:id', getPenjualanById)
router.post('/add', addPenjualan)
router.post('/edit/:id', editPenjualan) 
router.get('/delete/:id', deletePenjualan)

// Form
router.get('/add', formAdd)
router.get('/edit', formEdit)


module.exports = router