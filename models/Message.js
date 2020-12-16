const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    name: {type: String, required: true},
    company: {type: String, required: false},
    email: {type: String, required: true},
    message: {type: String, required: true},
    createdAt: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Message', messageSchema);