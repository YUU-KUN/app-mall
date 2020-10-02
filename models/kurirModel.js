const mongoose = require('mongoose');
const Schema = mongoose.Schema

const kurir = new Schema({
    nama: {
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