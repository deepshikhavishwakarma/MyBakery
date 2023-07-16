const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    CustomerName: { type: String, required: true },
    Email: { type: String, required: true },
    ContactNumber: { type: Number, required:true },
    Message: { type: String, required: true },
})

module.exports = mongoose.model('Contacts', contactSchema);
