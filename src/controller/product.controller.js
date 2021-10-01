let express = require("express");
 let mongoose= require("mongoose")
let router = express.Router();
let productSection = require("../model/product.model")
Product = mongoose.model("product", productSection);
router.post("/products", async (request, response) => {
    let detail = await Product.create(request.body);
    return response.status(201).send({detail})
})
router.get("/products", async (request, response) => {
    let detail = await Product.find().lean().exec();
    // detail.forEach(({_id}) => {
    //     console.log(_id)
    // })
    console.log(detail);
    response.render("homepage.ejs", {
        detail
    });
    //return response.status(200).send({detail})
})

router.get("/:id", async (request, response) => {
    let detail = await Product.findById(request.params.id).lean().exec();
    response.render("productDetail.ejs", {
        detail
    });
})
module.exports = router;