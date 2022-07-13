const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema =  new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {timestamps:true})

//Item will be the name of the collection
const Item = mongoose.model('Item', itemSchema);
module.exports = Item;