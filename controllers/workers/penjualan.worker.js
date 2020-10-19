const command = require('../../models/repositories/penjualan/command');
const query = require('../../models/repositories/penjualan/query');

const distributor = require('./distributor.worker');
const produk = require('./produk.worker');
const agen = require('./agen.worker');
const user = require('./user.worker');
const kurir = require('./kurir.worker');

module.exports = {
    getAll : async ()=>{
        const recordset = await query.getAll()
        return recordset
    },
    getById : async (payload)=>{
        const recordset = await query.getById(payload)
        return recordset
    },
    getData : async ()=>{
        const payload = {
            _id: 0, 
            nama: 1
        }
        const getProduk = await produk.get(payload)
        const namaProduk = await forloopNama(getProduk)
        const getAgen = await agen.get(payload)
        const namaAgen = await forloopNama(getAgen)
        const getKurir = await kurir.get(payload)
        const namaKurir = await forloopNama(getKurir)
        const recordset = {
            produk : namaProduk,
            agen : namaAgen,
            kurir : namaKurir
        }
        return recordset
    },
    create : async (data)=>{
        const getProduk = await produk.getByName(data.data.produk)
        const getAgen= await agen.getByName(data.data.agen)

        let getKurir 
        if (data.data.tipePengiriman == "kurir"){
            getKurir = await kurir.getByName(data.data.kurir)
            getKurir.ongkir = 10000
        }
        const total = parseInt(data.data.jumlah) * parseInt(getProduk.hargaJual)
        const payload = {
            produk: getProduk._id,
            agen: getAgen._id,
            nama: getProduk.nama,
            deskripsi: getProduk.deskripsi,
            jumlah: data.data.jumlah,
            harga_beli: getProduk.hargaBeli,
            harga_jual: getProduk.hargaJual,
            laba: getProduk.laba,
            kategori: getProduk.kategori,
            sub_kategori:getProduk.subKategori,
            tanggal: data.data.tanggal,
            inv: data.data.inv,
            total: total,
            tipe_pengiriman: data.data.tipePengiriman,
            kurir: getKurir._id,
            ongkir: getKurir.ongkir,
            nama_kurir: getKurir.nama,
            nohp_kurir: getKurir.noHp,
            status: data.data.status
        }
        const recordset = await command.create(payload)
        return recordset
    },
    // pembayaran : async (data)=>{
    //     const payload = {
    //         _id : data._id,
    //         payload : {
    //             inv : "inv",
    //             status : "dibayar"
    //         }
    //     }
    //     const recordset = await command.update(payload)
    //     return recordset
    // },
    update : async (payload)=>{
        const recordset = await command.update(payload)
        return recordset
    },
    delete : async (payload)=>{
        const recordset = await command.delete(payload)
        return recordset
    }
}

async function forloopNama(array){
    const result = []
    for (let index = 0; index < array.length; index++) {
        result.push(array[index].nama)
    }
    return result
}