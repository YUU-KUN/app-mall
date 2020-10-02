const mongoose = require("mongoose");

const kategoriSchema = new mongoose.Schema({
    nama:{type:String},
    sub:{type:String}
})

module.exports = mongoose.model('kategori',kategoriSchema)