const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    password : {type: String, required: true},
});

module.exports = mongoose.model('user', userSchema);