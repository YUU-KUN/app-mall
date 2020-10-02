// untuk yang terbiasa pakai controller 
// untuk yang terbiasa pakai controller dan router

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('template/index')
    console.log('render Index harusnya');
})

module.exports = router