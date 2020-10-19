const express = require('express');
const router = express.Router();

const {
    formAdd,
    formEdit,
    getAllPenjualan,
    getPenjualanById,
    addPenjualan,
    doPembayaran,
    editPenjualan,
    deletePenjualan
} = require('../controllers/penjualan.controller');

// Form
// router.get('/add', formAdd)
router.get('/edit', formEdit)

router.get('/', getAllPenjualan)
router.get('/:id', getPenjualanById)
router.get('/delete/:id', deletePenjualan)

router.post('/add', addPenjualan)
// router.post('/:id', doPembayaran)
router.post('/edit/:id', editPenjualan) 

/**
 * My API "dont use this"
 */

// Form
// router.get('/api/add', formAdd)
// router.get('/api/edit', formEdit)

// // User

// router.get('/api/', getAllPenjualan)
// router.get('/api/:id', getPenjualanById)
// router.post('/api/add', addPenjualan)
// router.post('/api/:id', doPembayaran)
// router.put('/api/edit/:id', editPenjualan) 
// router.delete('/api/delete/:id', deletePenjualan)


module.exports = router