const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    nama: { type: String },
    email: { type: String },
    password: { type: String },
    nohp: {type: String},
    level: {type: String, default: 'user'},
    createdAt: { type: Date }
  });

module.exports = mongoose.model('user',userSchema)