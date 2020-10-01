const penjualan = require('../../penjualan.models');

module.exports = {
    getAll : async ()=>{
        const result = await penjualan.find()
        return result
    },
    getById : async (payload)=>{
        const result = await penjualan.find(payload)
        return result
    }
}