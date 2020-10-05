const mongoose = require('mongoose');
const Schema = mongoose.Schema

const kurir = new Schema({
    nama: {
        type: String,
        require: true
    },
    noHp: {
        type: Number,
        require: true
    },
    alamat: {
        type: String,
        require: true
    },
    area: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model('kurir', kurir)