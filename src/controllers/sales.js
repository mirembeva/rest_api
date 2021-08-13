const SaleModel = require('../models/sales')

exports.SaleController = {
    //make a sale
async createNewSale(req,res){
   try{
      // req.body.userId=req.user._id;
      const response = await SaleModel.create(req.body)
      const id = response._id;
      // console.log(id)
      const sale = await SaleModel.findById({_id: id}).populate("User")

      return res.json(sale);
   }catch(err){
      console.log(err)
   }

   //  let newSale = await new SaleModel({
   //     userId: req.body.userId,
   //     productId: req.body.productId,
   //     Quantity: req.body.Quantity,
   //     //Price: req.body.Price
   //  });
    
    //newSale.save().then(result => {
   //     SaleModel
   //        .populate(newSale, { path: "user" })
   //        .then(sale => {
    
   //           res.json({
   //              message: "sale made",
   //              sale
   //           });
    
   //        })
   //  })
}
    
//     async getsales(req, res) {
//         try {
//             const response = await SaleModel.find();
//             return res.json(response);
//         } catch(err){
//             throw new Error("Failed to get products");
//         }
//     },
//     async createNewSale(req, res) {
//         try {
//             const response = await SaleModel.create(req.body);
//             return res.json(response);
//         } catch(err){
//             console.log(err)
//             // throw new Error("Failed to post products");
//         }
//     },
//     async updateSale(req, res) {
//         try {
//             const id = req.params.id;
//             const response = await SaleModel.findByIdAndUpdate({_id: id}, req.body, {new: true});
//             return res.json(response);
//         } catch(err){
//             throw new Error("Failed to updated Product");
//         }
//     },
//     async deleteSale(req, res) {
//         try {
//             const id = req.params.id;
//             const response = await SaleModel.findByIdAndDelete({_id: id});
//             return res.json({message: 'Resource deleted successfully'});
//         } catch(err){
//             throw new Error("Failed to delete Product");
//         }
//     }
}