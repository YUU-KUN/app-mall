const worker = require('./workers/pembelian.worker');

module.exports = {
    formAdd : async (req, res)=>{
        // render form
    },
    addPembelian : async (req, res)=>{
        const data = req.body
        try{
            const result = await worker.create(data)
            res.status(200).json({message: 'Berhasil',data: result})
        }catch(err){
            res.status(400).json({message: 'error', error: err.message})
        }
    },
    getAllPembelian : async (req, res)=>{
        try{
            const result = await worker.getAll()
            res.status(200).json({message: 'Berhasil',data: result})
        }catch(err){
            res.status(400).json({message: 'error', error: err.message})
        }
    },
    getPembelianById : async (req, res)=>{
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
    editPembelian : async (req, res)=>{
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
    deletePembelian : async (req, res)=>{
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