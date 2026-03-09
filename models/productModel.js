// const productModel=[
//     {id:1,name:"product1",price:100},
//     {id:2,name:"product2",price:200},
//     {id:3,name:"product3",price:300},
// ];
// export default productModel;


import mongoose from "mongoose";
const productSchema=mongoose.Schema({
    name:{type:String,required:true},
    desc:{type:String,required:true},
    price:{type:Number,required:true},
    imageurl:{type:String,required:true},
})
const productModel=mongoose.model("products",productSchema)
export default productModel;