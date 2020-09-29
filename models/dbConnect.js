const mongoose = require("mongoose");

mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb+srv://team2:5MwItjLEhPHWsEiz@percobaan.alaon.mongodb.net/team2?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Connected to DB');
}).catch(err =>{
    console.log('Something wrong with the connection');
    console.log(err);
    process.exit()
})