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
Product = mongoose.model("product", productSection);
//crud for products
app.post("/products", async (request, response) => {
    let detail = await Product.create(request.body);
    return response.status(201).send({detail})
})
app.get("/products", async (request, response) => {
    let detail = await Product.find().lean().exec();
    // detail.forEach(({_id}) => {
    //     console.log(_id)
    // })
    response.render("homepage.ejs", {
        detail
    });
    //return response.status(200).send({detail})
})

app.get("/products/:id", async (request, response) => {
    let detail = await Product.findById(request.params.id).lean().exec();
    response.render("productDetail.ejs", {
        detail
    });
})
//login
let loginSection=require("./model/login.model")
let Login= mongoose.model("login",loginSection)
app.post("/login", async (request, response) => {
    let detail = await Login.create(request.body);
    return response.status(201).send({detail})
})
app.get("/login", async (request, response) => {
    let detail = await Login.find().lean().exec();
    response.render("login.ejs", {
        detail
    })
})
app.listen(3434, async () => {
    await connect();
    console.log("listening to port 3434")
})