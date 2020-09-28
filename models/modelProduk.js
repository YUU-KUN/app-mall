const mongoose = require("mongoose");

const schemaProduk = mongoose.Schema({
    nama: {type: String},
    deskripsi: {type: String},
    kategori: {type: String},
    subKategori: {type: String},
    stok: {type:Number},
    hargaBeli:{type: Number},
    hargaJual: {type:Number},
    laba:{type:Number},
    active:{type: Boolean, default: true},
    createdAt:{type: Date},
    deleteOn:{type: Date,default: null}
})

module.exports = mongoose.model('produk',schemaProduk)