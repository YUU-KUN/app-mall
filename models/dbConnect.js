const mongoose = require("mongoose");

mongoose.Promise = global.Promise

const uri = 'mongodb://localhost/app-mall'

module.exports = mongoose.connect('mongodb+srv://team2:5MwItjLEhPHWsEiz@percobaan.alaon.mongodb.net/team2?retryWrites=true&w=majority' && uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
}).then(()=>{
    console.log('Connected to DB');
}).catch(err =>{
    console.log('Something wrong with the connection');
    console.log(err);
    process.exit()
})

