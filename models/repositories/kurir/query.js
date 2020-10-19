const kurir = require('../../kurirModel');

module.exports = {
    getAll : async ()=>{
        const result = await kurir.find()
        return result
    },   
    get : async (payload)=>{
        const result = await kurir.find({}, payload)
        return result
    },
    getById : async (payload)=>{
        const result = await kurir.findOne(payload)
        return result
    },
    getByName : async (payload)=>{
        const result = await kurir.findOne(payload)
        return result
    }
}