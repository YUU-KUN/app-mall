const agen = require('../../agenModel');

module.exports = {
    getAll : async ()=>{
        const result = await agen.find()
        return result
    },
    get : async (payload)=>{
        const result = await agen.find({}, payload)
        return result
    },
    getById : async (payload)=>{
        const result = await agen.findOne(payload)
        return result
    },
    getByName : async (payload)=>{
        const result = await agen.findOne(payload)
        console.log(result)
        return result
    }
}