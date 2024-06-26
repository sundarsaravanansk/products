const mongoose = require('mongoose')


const connectDatabase = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/ecomtest')
    .then((con) => console.log('Database Connected!'));
}


module.exports = connectDatabase;