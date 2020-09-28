const express = require('express');
const router = express.Router();
const Distributor = require('../models/distributorModel');


router.get("/", async(req, res) => {
    try {
        const distributor = await Distributor.find();
        res.json(distributor);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.post("/tambah", async(req, res) => {
    const distributor = new Distributor({
        nama: req.body.nama,
        alamat: req.body.alamat,
        noHp: req.body.noHp,
        pemilik: req.body.pemilik
    });
    try {
        const newDistributor = await distributor.save();
        res.status(201).json({ message: "Berhasil Tambah Data Distributor", newDistributor });
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

router.put("/edit/:id", getDistributor, async(req, res) => {
    try {
        const editDistributor = await res.distributor.set(req.body);
        res.json({ message: "Berhasil Mengubah Data Distributor", editDistributor});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

router.delete("/hapus/:id", getDistributor, async(req, res) => {
    try {
        await res.distributor.deleteOne();
        res.json({ message: "Berhasil Menghapus Data Distributor" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

//getDistributor middleware
async function getDistributor(req, res, next) {
    let distributor;
    try {
        distributor = await Distributor.findById(req.params.id);
        if(distributor == null) {
            return res.status(404).json({ message: "Data tidak ditemukan" });
        }  
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.distributor = distributor;
    next();
}

module.exports = router;