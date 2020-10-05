const express = require('express');
const router = express.Router();
const Distributor = require('../models/distributorModel');

router.get("/", async (req, res) => {
    try {
        const distributor = await Distributor.find();
        if (req.session.nama && req.session.email) {
            res.render('distributor', {
                title: 'Distributor',
                nama: req.session.nama,
                // nama: req.session.nama,
                email: req.session.email,
                data: distributor
            })
            console.log(distributor);
            // res.json(distributor);
        } else {
            // res.send('Mohon login terlebih dahulu')
            res.render('distributor', {
                title: 'Distributor',
                nama: "User",
                // nama: req.session.nama,
                email: "User@email.com",
                data: distributor
            })
            // res.json(distributor);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post("/tambah", async (req, res) => {
    const distributor = new Distributor({
        nama: req.body.nama,
        alamat: req.body.alamat,
        noHp: req.body.noHp,
        pemilik: req.body.pemilik
    });
    try {
        const newDistributor = await distributor.save();
        // res.status(201).json({ message: "Berhasil Tambah Data Distributor", newDistributor });
        res.redirect('/distributor')
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get("/edit/:id", async(req, res) => {
    try {
        const distributor = await Distributor.find({_id: req.params.id})
        res.render("editDistributor", { 
            data: distributor,
            title: 'Edit Distributor',
         });
    } catch (err) {
        res.status(400).json({message: 'error', error: err.message});
    }
})

router.post("/edit/:id", async(req, res) => {
    try {
        const editDistributor = await Distributor.findByIdAndUpdate({_id: req.params.id},req.body)
        // res.json({ message: "Berhasil Mengubah Data Distributor", data: editProduk});
        res.redirect('/distributor')
    } catch (err) {
        res.status(400).json({ message: 'error', error: err.message });
    }
})

// router.post("/edit/:id", getDistributor, async(req, res) => {
//     try {
//         const editDistributor = await res.distributor.set(req.body);
//         res.json({ message: "Berhasil Mengubah Data Distributor", data : editDistributor});
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

router.get("/hapus/:id", getDistributor, async(req, res) => {
    try {
        await res.distributor.deleteOne();
        // res.json({ message: "Berhasil Menghapus Data Distributor" });
        res.redirect('/distributor')
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

//getDistributor middleware
async function getDistributor(req, res, next) {
    let distributor;
    try {
        distributor = await Distributor.findById(req.params.id);
        if (distributor == null) {
            return res.status(404).json({ message: "Data tidak ditemukan" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.distributor = distributor;
    next();
}

module.exports = router;