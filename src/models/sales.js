const { Schema, model } = require('mongoose');

const SaleSchema = Schema({
   productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    },
    userId: {
        type: Schema.Types.ObjectId,
    ref: 'User',
    },
   Date: {
        type: Date,
        required: true,
        default:Date.now()
    },
    Quantity:Number,
})

const Sale = model('Sale', SaleSchema)
module.exports =Sale;