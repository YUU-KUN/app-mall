const command = require('../../models/repositories/pembelian/command');
const query = require('../../models/repositories/pembelian/query');

const distributor = require('./distributor.worker');
const produk = require('./produk.worker');

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
        const getDistributor = await distributor.get(payload)
        const namaDistributor = await forloopNama(getDistributor)
        const getProduk = await produk.get(payload)
        const namaProduk = await forloopNama(getProduk)
        const recordset = {
            produk : namaProduk,
            distributor : namaDistributor
        }
        return recordset
    },
    create : async (data)=>{
        const getDistributor = await distributor.getByName(data.nama)
        const getProduk = await produk.getByName(data.produkId)
        const payload = {
            distributorId: getDistributor._id,
            nama: getDistributor.nama,
            jumlah: data.jumlah,
            harga_beli: getProduk.hargaBeli,
            tanggal: data.tanggal,
            produkId: getProduk._id,
            inv: "inv",
            status: data.status
        } 
        // const amount = getProduk.stok + parseInt(data.jumlah)
        // const item = {
        //     _id : getProduk._id,
        //     payload : {
        //         stok : amount
        //     }
        // }
        // const editProduk = await produk.update(item)
        const recordset = await command.create(payload)
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

async function forloopNama(array){
    const result = []
    for (let index = 0; index < array.length; index++) {
        result.push(array[index].nama)
    }
    return result
}