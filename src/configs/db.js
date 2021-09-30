let mongoose = require("mongoose");
module.exports = () => {
    return mongoose.connect("mongodb+srv://adminuser:dbUserAnkur@cluster0.ljsrz.mongodb.net/joybuy_clone?retryWrites=true&w=majority")
};