const mongoose = require('mongoose');


const connection = mongoose.connect('mongodb://localhost:27017/e-commerce').
    then(() => console.log(`DB connected`))
    .catch((error) => console.log(`DB error`, error));


module.exports = connection;