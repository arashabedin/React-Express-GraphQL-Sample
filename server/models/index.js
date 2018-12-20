const mongoose = require('mongoose');

module.exports.connect = (url) => {
    mongoose.connect(url);
    mongoose.Promise = global.Promise;
    mongoose.connection.on('error', err =>{
        console.log(`The following error has been occured: ${err}`);
        process.exit(0);
    })
    require('./Book');
    require('./Author');

}