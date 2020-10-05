const express = require('express');
const router = express.Router();
const Kurir = require('../models/kurirModel');


router.get("/", async(req, res) => {
    try {
        const kurir = await Kurir.find();
        // res.json(kurir);
        res.render('kurir', {
            data: kurir
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.post("/tambah", async(req, res) => {
    const kurir = new Kurir({
        nama: req.body.nama,
        noHp: req.body.noHp,
        alamat: req.body.alamat,
        area: req.body.area
    });
    try {
        const newKurir = await kurir.save();
        // res.status(201).json({ message: "Berhasil Tambah Data Distributor", newKurir });
        res.redirect('/kurir')
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

router.put("/edit/:id", getKurir, async(req, res) => {
    try {
        const editKurir = await res.kurir.set(req.body);
        res.json({ message: "Berhasil Mengubah Data Distributor", data : editKurir});
        res.json({ message: "Berhasil Mengubah Data Distributor", editKurir});

    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

router.delete("/hapus/:id", getKurir, async(req, res) => {
    try {
        await res.kurir.deleteOne();
        res.json({ message: "Berhasil Menghapus Data Distributor" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

//getKurir middleware
async function getKurir(req, res, next) {
    let kurir;
    try {
        kurir = await Kurir.findById(req.params.id);
        if(kurir == null) {
            return res.status(404).json({ message: "Data tidak ditemukan" });
        }  
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.kurir = kurir;
    next();
}

module.exports = router;