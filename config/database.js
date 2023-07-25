const mongoose = require('mongoose');

const database = mongoose.connect('mongodb://127.0.0.1:27017/student_rest_api').then(() => {
    console.log('Database connected');
}).catch((error) => {
    console.log(`Error: ${error}`);
});

module.exports = database;