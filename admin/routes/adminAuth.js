const express = require ('express');
const session = require("express-session");
const router = express.Router();

router.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(password === "12345" && username === "admin"){
        req.session.isAuth = true;
        res.redirect("admin/dashboard");
    }else{
        res.send("not authorized");
    }
})


router.get("/logout", (req,res) => {
    req.session.isAuth = false;
    res.redirect("/");
})
module.exports = router;