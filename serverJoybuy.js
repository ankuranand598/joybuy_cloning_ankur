let express = require("express");
let app = express();
app.use(express.json());
let mongoose = require("mongoose");
let connect=()=> {
    return mongoose.connect("mongodb://127.0.0.1:27017/joybuy_clone")
};

app.listen(3434, async () => {
    await connect();
    console.log("listening to port 3434")
})