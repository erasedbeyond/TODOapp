const mongoose = require('mongoose');

const mongooseSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }
});

const task = mongoose.model('task',mongooseSchema);
module.exports = task;


