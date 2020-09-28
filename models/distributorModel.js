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
        type: Number,
        require: true
    },
    pemilik: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model('distributor', distributor)