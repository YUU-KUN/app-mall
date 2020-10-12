const worker = require('./workers/penjualan.worker');
const Agen = require('../models/agenModel')
const Kurir = require('../models/kurirModel')

module.exports = {
    formAdd : async (req, res)=>{
        const kurir = await Kurir.find();
        const agen = await Agen.find();
        res.render('penjualan', {
            kurir: kurir,
            agen: agen
        });
    },
    addPenjualan : async (req, res)=>{
        const data = req.body
        try{
            const result = await worker.create(data)
            res.status(200).json({message: 'Berhasil',data: result})
        }catch(err){
            res.status(400).json({message: 'error', error: err.message})
        }
    },
    getAllPenjualan : async (req, res)=>{
        try{
            const result = await worker.getAll()
            res.status(200).json({message: 'Berhasil',data: result})
        }catch(err){
            res.status(400).json({message: 'error', error: err.message})
        }
    },
    getPenjualanById : async (req, res)=>{
        try{
            const result = await worker.getById({_id : req.params.id})
            res.status(200).json({message: 'Berhasil',data: result})
        }catch(err){
            res.status(400).json({message: 'error', error: err.message})
        }
    },
    formEdit : async (req, res)=>{
        const result = await worker.getById({_id : req.params.id})

        // render form
    },
    editPenjualan : async (req, res)=>{
        const data = {
            _id : req.params.id,
            payload : req.body
        }
        try{
            const result = await worker.update(data)
            res.status(200).json({message: 'Berhasil',data: result})
        }catch(err){
            res.status(400).json({message: 'error', error: err.message})
        }
    },
    deletePenjualan : async (req, res)=>{
        const data = {
            _id : req.params.id
        }
        try{
            const result = await worker.delete(data)
            res.status(200).json({message: 'Berhasil',data: result})
        }catch(err){
            res.status(400).json({message: 'error', error: err.message})
        }
    }
}