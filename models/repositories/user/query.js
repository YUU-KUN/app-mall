const ussr = require('../../user');

module.exports = {
    getAll : async ()=>{
        const result = await ussr.find()
        return result
    },
    get : async (payload)=>{
        const result = await ussr.find({}, payload)
        return result
    },
    getById : async (payload)=>{
        const result = await ussr.findOne(payload)
        return result
    },
    getByName : async (payload)=>{
        const result = await ussr.findOne(payload)
        return result
    }
}