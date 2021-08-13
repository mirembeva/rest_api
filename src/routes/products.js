const { ProductController } = require('../controllers/products')

module.exports = (app) => {
    app.route('/products')
        .get(ProductController.getproducts)
        .post(ProductController.createNewProduct);
    app.route('/products/:id')
        .put(ProductController.updateProduct)
        .delete(ProductController.deleteProduct);

 
}