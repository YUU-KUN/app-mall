// untuk yang terbiasa pakai controller 
// untuk yang terbiasa pakai controller dan router

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('dashboardAdmin')
    console.log('render dashboard Admin harusnya');
})

module.exports = router