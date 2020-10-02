const mongoose = require('mongoose');

var pembelian = new mongoose.Schema({
    distributorId: {
        type: String
    },
    nama: {
        type: String
    },
    jumlah: {
        type: Number
    },
    harga_beli: {
        type: Number
    },
    tanggal: {
        type: Date
    },
    produkId: {
        type: String
    },
    inv:{
        type: String
    },
    status:{
        type: String
    }
});


module.exports = mongoose.model('pembelian', pembelian);