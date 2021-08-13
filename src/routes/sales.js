const { SaleController } = require('../controllers/sales')

module.exports = (app) => {
    app.route('/Sales')
        //.get(SaleController.getsales)
        .post(SaleController.createNewSale);
    // app.route('/Sales/:id')
    //     .put(SaleController.updateSale)
    //     .delete(SaleController.deleteSale);

 
}