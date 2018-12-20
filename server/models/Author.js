const mongoose = require('mongoose');
const AuthorSchema = mongoose.Schema({
    id:Number,
    name:String,
    age:Number,
});

module.exports = mongoose.model('Author',AuthorSchema);