const express = require('express')
const User = require('../models/user')
const Produk = require('../models/modelProduk')
const router = express.Router()

router.get('/login', (req, res) => {
    // res.send('login')
    res.render('login', {
        title: 'Login'
    })
})

router.post('/login', async (req, res) => {
    try {
        let user = await User.findOne({ email: `${req.body.email}`, password: req.body.password })
        req.session._id = user._id;
        req.session.email = user.email;
        req.session.nama = user.nama;
        req.session.password = user.password;
        // req.session.level = user.level;
        res.redirect('/dashboard')
        if (user.level == 'admin') {
            req.session.admin = true
            res.redirect('/admin')
        } else {
            req.session.logged_in = true
            res.send(req.session.level)
        }
    } catch (err) {

    }
})

router.get('/register', (req, res) => {
    res.render('register', {
        title: 'Register',
    })
})

router.post('/register', async (req, res) => {

    const { nama, email, password, nohp } = req.body;
    const createdAt = Date.now()
    const user = new User({ nama, email, password, createdAt, nohp })
    console.log(user);

    try {
        const tambahUser = await user.save()
        // res.status(200).json({message: 'Berhasil',data: tambahUser})
        res.redirect('/login')
    } catch (err) {
        res.status(400).json({ message: 'error', error: err.message })
    }
})

router.get('/', (req, res) => {
    if (req.session.nama) {
        res.render('dashboardUser', {
            title: 'Home Page',
            message: `Selamat Datang ${req.session.nama}`,
            username: `${req.session.nama}`,
            email: `${req.session.email}`
        })
    } else {
        res.render('dashboardUser', {
            title: 'Home Page',
            message: `Selamat Datang  User!`,
            subMessage: `Silahkan Kunjungi halaman Produk untuk mulai berbelanja`,
            username: 'User',
            email: 'user@user.com'
        })
    }
})

router.get('/produkUser', async (req, res) => {
    const produkUser = await Produk.find();
    if (req.session.nama) {
        res.render('produkUser', {
            // title: 'Home Page',
            data: produkUser,
            username: `${req.session.nama}`,
            email: `${req.session.email}`
        })
    } else {
        res.render('produkUser', {
            // title: 'Home Page',
            // message: `Selamat Datang  User!`,
            // subMessage: `Silahkan Kunjungi halaman Produk untuk mulai berbelanja`,
            username: 'User',
            email: 'user@user.com'
        })
    }
    console.log(produkUser);
})

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login')
})

module.exports = router