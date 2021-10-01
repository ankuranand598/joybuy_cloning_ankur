 let express = require("express");
let router = express.Router();
let mongoose=require("mongoose")
let loginSection = require("../model/login.model");
let Login = mongoose.model("plogin", loginSection);
router.post("/login", async (request, response) => {
    let detail = await Login.create(request.body);
    return response.status(201).send({detail})
})
router.get("/login", async (request, response) => {
    let detail = await Login.find().lean().exec();
    response.render("login.ejs", {
        detail
    })
})
module.exports = router;