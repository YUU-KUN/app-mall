const command = require('../../models/repositories/pembelian/command');
const query = require('../../models/repositories/pembelian/query');

module.exports = {
    getAll : async ()=>{
        const recordset = await query.getAll()
        return recordset
    },
    getById : async (payload)=>{
        const recordset = await query.getById(payload)
        return recordset
    },
    create : async (payload)=>{
        const buy = {
            distributorId: payload.distributorId,
            nama: payload.nama,
            jumlah: payload.jumlah,
            harga_beli: payload.harga_beli,
            tanggal: payload.tanggal,
            produkId: payload.produkId,
            inv: payload.inv,
            status: payload.status
        }
        const recordset = await command.create(buy)
        return recordset
    },
    update : async (payload)=>{
        const recordset = await command.update(payload)
        return recordset
    },
    delete : async (payload)=>{
        const recordset = await command.delete(payload)
        return recordset
    }
}