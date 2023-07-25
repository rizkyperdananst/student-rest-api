const mongoose = require('mongoose');

const Student = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    npm: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        required: true,
    },
    faculty: {
        type: String,
        required: true,
    },
    study_program: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Students', Student);