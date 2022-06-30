let mongoose = require('mongoose');
// Employee Schema
const Customer  = mongoose.model('Customer', {
    name: {
        type: String,
        required:true
    }, 
    surname: {
        type:String,
        required:true
    },
    nickname: {
        type: String,
        required:true
    }, 
    nationality: {
        type:String,
        required:true
    },
    height: {
        type: String,
        required:true
    }, 
    weight: {
        type:String,
        required:true
    },
    birth: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    }
});
module.exports = { Customer }