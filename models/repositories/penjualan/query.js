const penjualan = require('../../penjualan.models');

module.exports = {
    getAll : async ()=>{
        const result = await penjualan.find().populate('agen').populate('produk')
        return result
    },
    getById : async (payload)=>{
        const result = await penjualan.findOne(payload).populate('agen').populate('produk')
        return result
    },
}