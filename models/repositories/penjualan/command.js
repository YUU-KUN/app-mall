const penjualan = require('../../penjualan.models');

module.exports = {
    create: async (payload)=>{
        const result = await penjualan.create(payload)
        return result
    },
    update : async (payload)=>{
        const result = await penjualan.findByIdAndUpdate({_id : payload._id}, payload.payload)
        return result
    },
    delete : async (payload)=>{
        const result = await penjualan.findByIdAndDelete(payload)
        return result
    }
}