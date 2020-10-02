const mongoose = require('mongoose');
const Schema = mongoose.Schema

const distributor = new Schema({
    nama: {
        type: String,
        require: true
    },
    alamat: {
        type: String,
        require: true
    },
    noHp: {
<<<<<<< HEAD
        type: String,
=======
        type: Number,
>>>>>>> aa14ffe93953dbf83ad85d88632bb525412b106b
        require: true
    },
    pemilik: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model('distributor', distributor)