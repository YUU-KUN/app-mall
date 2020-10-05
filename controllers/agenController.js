const express = require('express');
const router = express.Router();
const Agen = require('../models/agenModel');


router.get("/", async(req, res) => {
    try {
        const agen = await Agen.find();
        res.render('agen', {
            data: agen
        })
        // res.json(agen);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.post("/tambah", async(req, res) => {
    const agen = new Agen({
        nama: req.body.nama,
        alamat: req.body.alamat,
        noHp: req.body.noHp,
        pemilik: req.body.pemilik
    });
    try {
        const newAgen = await agen.save();
        // res.status(201).json({ message: "Berhasil Tambah Data Agen", newAgen });
        res.redirect('/agen')
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

router.get("/edit/:id", getAgen, async(req, res) => {
    try {
        const editAgen = await res.agen.set(req.body);
        // res.json({ message: "Berhasil Mengubah Data Distributor", data : editAgen});
        res.render('editAgen', {
            data: editAgen
        });
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

router.post("/update/:id", async(req, res) => {
    try {
        const editAgen = await Agen.findByIdAndUpdate({_id: req.params.id, active:true},req.body)
        // res.json({ message: "Berhasil Mengubah Data Distributor", data : editKurir});
        res.redirect('/agen');
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});


router.get("/hapus/:id", getAgen, async(req, res) => {
    try {
        await res.agen.deleteOne();
        // res.json({ message: "Berhasil Menghapus Data Agen" });
        res.redirect('/agen')
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

//getDistributor middleware
async function getAgen(req, res, next) {
    let agen;
    try {
        agen = await Agen.findById(req.params.id);
        if(agen == null) {
            return res.status(404).json({ message: "Data tidak ditemukan" });
        }  
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.agen = agen;
    next();
}

module.exports = router;