const pembelian = require('../../pembelian.models');

module.exports = {
    getAll : async ()=>{
        const result = await pembelian.find().populate('distributorId').populate('produkId')
        return result
    },
    getById : async (payload)=>{
        const result = await pembelian.findOne(payload).populate('distributorId').populate('produkId')
        return result
    },
}