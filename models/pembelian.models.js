const mongoose = require('mongoose');

var pembelian = new mongoose.Schema({
    distributorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "distributor"
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
        type: mongoose.Schema.Types.ObjectId,
        ref: "produk"
    },
    inv:{
        type: String
    },
    status:{
        type: String
    }
});


module.exports = mongoose.model('pembelian', pembelian);