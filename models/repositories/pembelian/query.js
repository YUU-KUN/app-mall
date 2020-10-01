const pembelian = require('../../pembelian.models');

module.exports = {
    getAll : async ()=>{
        const result = await pembelian.find()
        return result
    },
    getById : async (payload)=>{
        const result = await pembelian.find(payload)
        return result
    }
}