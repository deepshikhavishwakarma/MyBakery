const express = require('express');
const session = require("express-session");
const router = express.Router();

const Cake = require("./CakeSchema");
const Order = require("./orderSchema");

router.get("/", async (req, res) => {
    try {
        const cakes = await Cake.find({}).exec();
        console.log("Fetched cakes without error");


        res.render("mainpage", { cakes });
    } catch (err) {
        console.error('Error fetching data:', err);
        res.render("errorPage", { code: "504", message: "Page Unavailable", Type:"Connection Timeout." }); 
    }
});

router.get("/seeMore/:cakeName", async (req, res) => {
    const cakeName = req.params.cakeName;
    // console.log(cakeName);

    try {
        const cake = await Cake.findOne({ CakeName: cakeName });
        // console.log(cake);
        res.render("description", { cake });
    } catch (err) {
        console.error('Error fetching data:', err);
        res.render("errorPage", { code: "404", message: "Item Not found or has been removed.", Type:"Internal Error." });
    }
})

router.get("/viewAll", async (req, res) => {
    try {
        const cakes = await Cake.find({}).exec();
        console.log("Fetched cakes without error");


        res.render("viewmore", { cakes });
    } catch (err) {
        console.error('Error fetching data:', err);
        res.render("errorPage", { code: "503", message: "Something Went wrong on our end. We are trying to fix it.", Type:"Database Error" });
    }
})


router.post('/addtocart/:cakeName/:price', (req, res) => {
    const { cakeName, price } = req.params;
    const selectedSize = req.body.selectSize;
    const thumbnailUrl = req.body.thumbnailUrl;

    // console.log(selectedSize);

    const newItem = {
        cakeName,
        price: parseInt(price) + parseInt(selectedSize),
        size: selectedSize,
        thumbnailUrl
    };

    if (!req.session.basket) {
        req.session.basket = [newItem];
    } else {
        req.session.basket.push(newItem);
    }
    res.redirect('/cart');
});


router.get('/cart', (req, res) => {
    const basketItems = req.session.basket || [];
    res.render('cart', { basketItems });
});



module.exports = router;