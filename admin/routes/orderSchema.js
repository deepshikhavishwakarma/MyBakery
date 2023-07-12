const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    CustomerName: { type: String, required: true },
    Cake_id: { type: String, required:true },
    CakeName: { type: String, required: true },
    OrderValue: { type: Number, required:true },
    SpecialDemands: { type: String, required:true },
    DeliveryAddress: { type: String, required:true },
    ContactNumber: { type: Number, required:true },
    OrderStatus: { type: String, required:true, default:"pending" }
})

module.exports = mongoose.model('Order', orderSchema);
