const ProductModel = require('../models/products')

exports.ProductController = {
    async getproducts(req, res) {
        try {
            const response = await ProductModel.find();
            return res.json(response);
        } catch(err){
            throw new Error("Failed to get products");
        }
    },
    async createNewProduct(req, res) {
        try {
            const response = await ProductModel.create(req.body);
            return res.json(response);
        } catch(err){
            console.log(err)
            // throw new Error("Failed to post products");
        }
    },
    async updateProduct(req, res) {
        try {
            const id = req.params.id;
            const response = await ProductModel.findByIdAndUpdate({_id: id}, req.body, {new: true});
            return res.json(response);
        } catch(err){
            throw new Error("Failed to updated Product");
        }
    },
    async deleteProduct(req, res) {
        try {
            const id = req.params.id;
            const response = await ProductModel.findByIdAndDelete({_id: id});
            return res.json({message: 'Resource deleted successfully'});
        } catch(err){
            throw new Error("Failed to delete Product");
        }
    }
}