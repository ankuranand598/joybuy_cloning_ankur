let mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    email_address:{type:String,required:true} ,
    password: { type: String, required: true },
   confirm:{ type: String, required: true },
    code: { type: String, required: true },
    company: { type: String, required: true },
    country: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true }
   
}, {
    versionKey: false,
    timestamps:true
})