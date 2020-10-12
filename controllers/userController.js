const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get("/", async (req, res) => {
    try {
        const user = await User.find();
        res.render('listUser', {
            title: 'List User',
            data: user
        })
        console.log('List User');
        console.log(user);
        // res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get("/edit/:id", async (req, res) => {
    try {
        const user = await User.find({ _id: req.params.id })
        res.render("editUser", {
            data: user,
            title: 'Edit User',
        });
    } catch (err) {
        res.status(400).json({ message: 'error', error: err.message });
    }
})

router.get("/edit/:id", getUser, async (req, res) => {
    try {
        const editUser = await res.user.set(req.body);
        // res.json({ message: "Berhasil Mengubah Data User", data : editUser});
        res.render('updateUser', {
            data: editUser
        })
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.post("/edit/:id", async (req, res) => {
    try {
        const editUser = await User.findByIdAndUpdate({ _id: req.params.id, active: true }, req.body)
        // res.json({ message: "Berhasil Mengubah Data User", data : editUser});
        res.redirect('/listUser')
    } catch (err) {
        res.status(400).json({ message: 'error', error: err.message });
    }
})

router.get("/hapus/:id", getUser, async (req, res) => {
    try {
        await res.user.deleteOne();
        // res.json({ message: "Berhasil Menghapus Data User" });
        res.redirect('/listUser')
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

//getUser middleware
async function getUser(req, res, next) {
    let user;
    try {
        user = await user.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: "Data tidak ditemukan" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.user = user;
    next();
}

module.exports = router;