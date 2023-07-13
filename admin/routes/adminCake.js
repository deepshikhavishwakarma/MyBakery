const express = require('express');
const session = require("express-session");
const router = express.Router();
const multer = require('multer');

router.get("/", (req, res) => {
    res.render('adminPage');
})
//---------------------------------------------//

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../client/public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });

const Cake = require("./newCakeSchema");
const Order = require("./orderSchema");


router.post('/admin/CreateCakes', upload.fields([
    { name: 'thumbnailImage', maxCount: 1 },
    { name: 'imagePaths', maxCount: 10 }
]), (req, res) => {

    const thumbnailImagePath = req.files['thumbnailImage'] ? req.files['thumbnailImage'][0].path.replace(/\\/g, '/').replace('public/', '') : '';
    const carouselImagePaths = req.files['imagePaths'] ? req.files['imagePaths'].map(file => file.path.replace(/\\/g, '/').replace('public/', '')) : [];

    const newCake = new Cake({
        CakeName: req.body.cakeName,
        CakeThumbNailImage: thumbnailImagePath,
        ImagePaths: carouselImagePaths,
        CakeDescription: req.body.cakeDescription,
        CakeSugarAmount: req.body.cakeSugarAmount,
        CakeType: req.body.cakeType,
        Price: req.body.price,
        Discount: req.body.discount,
    });

    newCake.save()
        .then(() => {
            res.send('Cake created successfully!');
        })
        .catch(error => {
            res.status(500).send('Error creating cake: ' + error);
        });
});

module.exports = router;