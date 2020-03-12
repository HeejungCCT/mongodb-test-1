
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({ 
    email: { type: String, unique: true, lowercase: true}, // primiary key in relational db
    password: String,
    username: String,
    gender: { 
        type: String,
        enum: ['MALE', 'FEMALE']
    },
    phone: Number 
});

module.exports = mongoose.model('User', userSchema);