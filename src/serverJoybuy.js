const { request, response } = require("express");
let express = require("express");
let app = express();
app.use(express.json());
const path = require("path");
app.set("view engine", "ejs");
//app.use(express.static('public'));
app.set("/views",path.join(__dirname,"views"))
app.use("/static",express.static(path.join(__dirname,'../public')));
app.use(express.urlencoded({extended:false}));
let mongoose = require("mongoose");
let connect=require("./configs/db")
//product,
let productSection = require("./model/product.model")
//{type:mongoose.Schema.Types.ObjectId,ref:"student",required:true}

//crud for products
let productController = require("./controller/product.controller")
app.use("/products", productController);
//login
let loginSection=require("./model/login.model")
let Login = mongoose.model("login", loginSection);
let loginController = require("./controller/login.controller");
app.use("/login",loginController)

app.listen(7878, async () => {
    await connect();
    console.log("listening to port 3434")
})