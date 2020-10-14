const command = require('../../models/repositories/user/command');
const query = require('../../models/repositories/user/query');

module.exports = {
    getAll : async ()=>{
        const recordset = await query.getAll()
        return recordset
    },
    get : async (payload)=>{
        const recordset = await query.get(payload)
        return recordset
    },
    getById: async (payload)=>{
        const recordset = await query.getById({_id : payload})
        return recordset
    },
    getByName: async (payload)=>{
        const recordset = await query.getByName({nama : payload})
        return recordset
    },
}