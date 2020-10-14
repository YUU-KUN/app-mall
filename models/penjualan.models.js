const mongoose = require('mongoose');

var penjualanSchema = new mongoose.Schema({
    produk: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "produk"
    },
    agen: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    nama: {
        type: String
    },
    deskripsi: {
        type: String
    },
    jumlah: {
        type: Number
    },
    harga_beli: {
        type: Number
    },
    harga_jual:{
        type: Number
    },
    laba:{
        type: Number
    },
    kategori: {
        type: String
    },
    sub_kategori:{
        type: String
    },
    tanggal: {
        type: Date
    },
    inv: {
        type: String
    },
    total:{
        type:Number
    },
    tipe_pengiriman:{
        type:String
    },
    kurir:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "kurir" 
    },
    ongkir: {
        type: Number
    },
    nama_kurir:{
        type:String
    },
    nohp_kurir:{
        type: Number
    },
    status:{
        type:String
    }
});

module.exports = mongoose.model('penjualan', penjualanSchema);