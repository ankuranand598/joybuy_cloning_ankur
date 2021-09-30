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
let productSection = new mongoose.Schema({
    prod_name:{type:String,required:true} ,
   price:{type:Number,required:true},
    image: [{ type: String, required: true }]
    
}, {
    versionKey: false,
    timestamps:true
})
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
app.listen(3434, async () => {
    await connect();
    console.log("listening to port 3434")
})