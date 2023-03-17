const mongoose= require("mongoose");

const productSchema= mongoose.Schema({
    product_name: String,
    price: Number,
    quantity: Number,
    status: String,
    userID: String
    
})

const ProductModel= mongoose.model("product",productSchema)

module.exports={
    ProductModel
}