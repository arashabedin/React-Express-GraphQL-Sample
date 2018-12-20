const mongoose = require('mongoose');
const BookSchema = mongoose.Schema({
    name:String,
    genre:String,
    authorId:Number
});
module.exports = mongoose.model('Book', BookSchema);