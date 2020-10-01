const command = require('../../models/repositories/penjualan/command');
const query = require('../../models/repositories/penjualan/query');

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
            produk: payload.produk,
            agen: payload.agen,
            nama_agen: payload.nama_agen,
            nama: payload.nama,
            deskripsi:payload.deskripsi,
            jumlah: payload.jumlah,
            harga_beli: payload.harga_beli,
            harga_jual: payload.harga_jual,
            laba: payload.laba,
            kategori: payload.kategori,
            sub_kategori:payload.sub_kategori,
            tanggal: payload.tanggal,
            inv: payload.inv,
            total: payload.total,
            tipePengiriman:payload.tipePengiriman,
            kurir: payload.kurir,
            ongkir: payload.ongkir,
            nama_kurir: payload.nama_kurir,
            nohp_kurir: payload.nohp_kurir,
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