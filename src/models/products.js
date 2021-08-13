const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
   productName: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Quantity:Number,
})

const Product = model('Product', ProductSchema)
module.exports = Product;