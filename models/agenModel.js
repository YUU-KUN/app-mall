const mongoose = require('mongoose');
const Schema = mongoose.Schema

const agen = new Schema({
    nama: {
        type: String,
        require: true
    },
    alamat: {
        type: String,
        require: true
    },
    noHp: {
        type: String,
        require: true
    },
    pemilik: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model('agen', agen)