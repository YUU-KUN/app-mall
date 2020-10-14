const produk = require('../../modelProduk');

module.exports = {
    create: async (payload)=>{
        const result = await produk.create(payload)
        return result
    },
    update : async (payload)=>{
        const result = await produk.findByIdAndUpdate({_id : payload._id}, payload.payload)
        return result
    },
    delete : async (payload)=>{
        const result = await produk.findByIdAndDelete(payload)
        return result
    }
}