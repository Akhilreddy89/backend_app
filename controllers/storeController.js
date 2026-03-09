import productModel from "../models/productModel.js";

const showProducts = async (req,res) => { 
              //controller function
    const products=await productModel.find();
    res.render("store/product",{products:products})
}

export {showProducts}