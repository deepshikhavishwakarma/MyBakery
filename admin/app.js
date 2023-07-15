const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require('express-session');
require("dotenv").config();
// const fs = require("fs");

//-----------------copyright deep's microsystem-----------------------//

const port = 4000;

const app = express();

//----------------------------------------------------------------------//

const locale = "mongodb+srv://Deep:Mongo@cluster0.lqjmayx.mongodb.net/MyBakery";
const uriLocal = "mongodb://localhost:27017/cakeDB";

mongoose.connect(uriLocal, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("successfully connected to your MongoDB database."))
    .catch((error, req, res) => {
        console.log(error)
        // res.render("errorPage", { code: "503", message: "SERVICE UNAVAILABLE" });
    })


app.use(session({
    secret: '##123#123##',
    resave: false,
    saveUninitialized: true
}));

// initializer
app.use(bodyParser.json({ limit: '25mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '25mb', extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

//--------------------- our stuff -------------------------------//

app.get("/", (req, res) => {
    res.render("login");
})

const auth = require("./routes/adminAuth");
app.use(auth);

const adminCake = require("./routes/adminCake");
app.use(adminCake);

//---------------------- port --------------------------------//
app.listen(`${port}` || 4000, () => {
    console.log("Server has started successfully on port " + `${port}`);
    console.log(`app listing on port http://localhost:${port}`);
});
