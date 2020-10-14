const worker = require('./workers/pembelian.worker');
// const Distributor = require('../models/distributorModel');

module.exports = {
    formAdd : async (req, res)=>{
        try{
            const result = await worker.getData()            
            // render form
            res.render('pembelian', {
                data: result
            })
        }catch(err){
            res.status(400).json({message: 'error', error: err.message})
        } 
    },
    addPembelian : async (req, res)=>{
        const data = req.body
        try{
            const result = await worker.create(data)
            // render view

            res.status(200).json({message: 'Berhasil',data: result})
        }catch(err){
            res.status(400).json({message: 'error', error: err.message})
        } 
    },
    getAllPembelian : async (req, res)=>{
        try{
            const result = await worker.getAll()
            // render view

            res.status(200).json({message: 'Berhasil',data: result})
            console.log(result);
        }catch(err){
            res.status(400).json({message: 'error', error: err.message})
        }
    },
    getPembelianById : async (req, res)=>{
        try{
            const result = await worker.getById({_id : req.params.id})
            // render view

            res.status(200).json({message: 'Berhasil',data: result})
        }catch(err){
            res.status(400).json({message: 'error', error: err.message})
        }
    },
    formEdit : async (req, res)=>{
        try{
            const result = await worker.getById({_id : req.params.id})          
            // render form
            
            res.status(200).json({message: 'Berhasil',data: result})
        }catch(err){
            res.status(400).json({message: 'error', error: err.message})
        } 
    },
    editPembelian : async (req, res)=>{
        const data = {
            _id : req.params.id,
            payload : req.body
        }
        try{
            const result = await worker.update(data)
            // redirect view pembelian
            
            res.status(200).json({message: 'Berhasil',data: result})
        }catch(err){
            res.status(400).json({message: 'error', error: err.message})
        }
    },
    deletePembelian : async (req, res)=>{
        const data = {
            _id : req.params.id
        }
        try{
            const result = await worker.delete(data)
            // redirect view pembeilan

            res.status(200).json({message: 'Berhasil',data: result})
        }catch(err){
            res.status(400).json({message: 'error', error: err.message})
        }
    }
}