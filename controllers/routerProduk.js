const express = require('express');
const router = express.Router()
const Produk = require('../models/modelProduk')

router.get('/', async (req, res) => {
    try {
        const produk = await Produk.find({ active: true })
        // res.status(200).json({message: 'Sukses', data:produk})
        res.render('produk', {
            data:produk,
            title: 'Produk'
        })
    } catch (err) {
        res.status(400).json({ message: 'error', error: err.message });
    }
})

router.get('/editProduk', (req, res) => {
    res.render('editProduk')
})

router.get('/:id', async (req, res) => {
    try {
        const produk = await Produk.find({ _id: req.params.id, active: true })
        res.status(200).json({ message: 'Sukses', data: produk })
    } catch (err) {
        res.status(400).json({ message: 'error', error: err.message });
    }
})

router.post('/add', async (req, res) => {

    const { nama, deskripsi, kategori, subKategori, stok, hargaBeli, hargaJual } = req.body;
    const laba = hargaJual - hargaBeli
    const createdAt = Date.now()
    const produk = new Produk({ nama, deskripsi, kategori, subKategori, stok, hargaBeli, hargaJual, laba, createdAt })

    try {
        const tambahProduk = await produk.save()
        // res.status(200).json({message: 'Berhasil',data: tambahProduk})
        res.redirect('/produk')
    }catch(err){
        res.status(400).json({message: 'error', error: err.message})
    }
})

router.get("/edit/:id", async(req, res) => {
    try {
        const produk = await Produk.find({_id: req.params.id, active:true})
        res.render("editProduk", { 
            data: produk,
            title: 'Edit Produk'
         });
    } catch (err) {
        res.status(400).json({message: 'error', error: err.message});
    }
})

router.post("/update/:id", async (req, res) => {
    try {
        const editProduk = await Produk.findByIdAndUpdate({ _id: req.params.id, active: true }, req.body)
        // res.json({ message: "Berhasil Mengubah Data Distributor", data: editProduk});
        res.redirect('/produk')
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.put("/softdelete/:id", async (req, res) => {
    try {
        const deleteOn = Date.now()
        const active = false
        const softdelete = await Produk.findByIdAndUpdate({ _id: req.params.id, active: true }, { deleteOn: deleteOn, active: active })
        res.json({ message: "Berhasil Menonaktifkan Data Distributor", data: softdelete });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.get("/delete/:id", async(req, res) => {
    try {
        await Produk.deleteOne({_id:req.params.id});
        // res.json({ message: "Berhasil Menghapus Data Distributor" });
        res.redirect('/produk')
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;