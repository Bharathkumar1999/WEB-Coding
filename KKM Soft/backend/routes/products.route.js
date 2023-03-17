

const express= require("express");

const {ProductModel}= require("../models/Product.model")

const productsRouter= express.Router();

productsRouter.get("/", async(req,res)=>{
    const products= await ProductModel.find()
    res.send(products)
})

productsRouter.post("/create",async(req,res)=>{
    const payload= req.body
    try{
        const new_Product= new ProductModel(payload)
        await new_Product.save()
        res.send({"msg":"Product created successfully"})

    }
    catch(err){
        console.log(err);
        res.send({"err":"Something went wrong"})

    }
    
})

productsRouter.patch("/update/:ProductID",async(req,res)=>{
    const payload= req.body;
    const ProductID= req.params.ProductID;
    const userID= req.body.userID
    const Product= await ProductModel.findOne({_id:ProductID})
    if(userID !== Product.userID){
        res.send("Not authorised")
    }
    else{
        await ProductModel.findByIdAndUpdate({_id: ProductID},payload)
        res.send({"msg": "Product updated successfully"})
    }
})

productsRouter.delete("/delete/:ProductID",async(req,res)=>{
    const ProductID= req.params.ProductID;
    const userID= req.body.userID
    const Product= await ProductModel.findOne({_id:ProductID})
    if(userID !== Product.userID){
        res.send("Not authorised")
    }
    else{
        await ProductModel.findByIdAndDelete({_id: ProductID})
        res.send({"msg": "Product deleted successfully"})
    }
    
})

module.exports= {productsRouter}