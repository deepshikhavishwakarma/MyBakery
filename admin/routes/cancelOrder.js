const express = require('express');
const Order = require('./orderSchema')

const router = express();

router.post("/cancelOrder/:id", async (req, res) => {
    await Order.findByIdAndDelete(req.params.id)
    .then(
        res.send(() => {
            res.send("Order cancelled");
        })
    )
    .catch((err) => {
        console.log(err);
    });
});