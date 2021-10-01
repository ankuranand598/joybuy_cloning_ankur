let mongoose = require("mongoose");
module.exports=new mongoose.Schema({
    prod_name:{type:String,required:true} ,
   price:{type:Number,required:true},
    image: [{ type: String, required: true }]
    
}, {
    versionKey: false,
    timestamps:true
})