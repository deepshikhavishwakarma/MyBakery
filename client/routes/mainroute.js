const express = require('express');
const session = require("express-session");
const router = express.Router();

const Cake = require("./CakeSchema");

router.get("/", async (req, res) => {
    try {
        const cakes = await Cake.find({}).exec();
        console.log("Fetched cakes without error");


        res.render("mainpage", { cakes });
    } catch (err) {
        console.error('Error fetching data:', err);
        // res.render("errorpage"); 
    }
});

router.get("/seeMore/:cakeName", async (req, res) => {
    const cakeName = req.params.cakeName;
    // console.log(cakeName);

    try{
        const cake = await Cake.findOne({CakeName:cakeName});
        // console.log(cake);
        res.render("description", {cake});
    }catch(err){
        console.error('Error fetching data:', err);
        // res.render("errorpage");
    }
})


router.get("/cart", async (req,res) => {
    res.render("cart");
})

module.exports = router;