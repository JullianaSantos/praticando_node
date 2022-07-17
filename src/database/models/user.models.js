const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nomeLivro: {
        type: String,
        required: true,
    },
    autor: {
        type: String,
        required: true,
    }, 
    dataPubli: {
        type: String,
        required: true,
    },
    editora: {
        type: String,
        required: true,
    },
    pais: {
        type: String,
        required: true
    }
});

const UserModel= mongoose.model('User', userSchema);

module.exports= UserModel;