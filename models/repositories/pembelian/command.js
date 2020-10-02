const pembelian = require('../../pembelian.models');

module.exports = {
    create: async (payload)=>{
        const result = await pembelian.create(payload)
        return result
    },
    update : async (payload)=>{
        const result = await pembelian.findByIdAndUpdate({_id : payload._id}, payload.payload)
        return result
    },
    delete : async (payload)=>{
        const result = await pembelian.findByIdAndDelete(payload)
        return result
    }
}