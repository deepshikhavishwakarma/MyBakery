const mongoose = require('mongoose');

const cakeSchema = new mongoose.Schema({
    CakeName: { type: String, unique:true , required: true },
    CakeThumbNailImage: { type: String, required: true },
    ImagePaths: [{ type: String, required: true }],
    CakeDescription: { type: String, required:true },
    CakeSugarAmount: { type: Number, required:true },
    CakeType: { type: String, required:true },
    CakeSpeciality: { type: String, required:true },
    Price: { type: Number, required:true },
    Discount: { type: Number, required:true, default:0 }
})

module.exports = mongoose.model('Cake', cakeSchema);
