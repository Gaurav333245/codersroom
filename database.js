const mongoose = require('mongoose');
require('dotenv').config();
function DbConnect() {
    console.log('coming here...', process.env.DB_URL);
    const DB_URL = process.env.DB_URL;
    // Database connection
    // mongoose.connect(DB_URL, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useFindAndModify: false,
    // });
    // const db = mongoose.connection;
    // db.on('error', console.error.bind(console, 'connection error:'));
    // db.once('open', () => {
    //     console.log('DB connected...');
    // });

    mongoose.connect(DB_URL , {
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    }).then(() => {
        console.log(`Connection succesful`)
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = DbConnect;
