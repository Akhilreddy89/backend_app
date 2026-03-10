import productModel from "../models/productModel.js";

const getProducts =async (req,res) =>{
    const products= await productModel.find(); //a async function is used here for retriveal of product data using find method and used await keyword
    res.render("products/index",{products}); // we send this render to admin panel where it is used for update products data
}
const addProduct =async (req,res)=>{
    const product = req.body;//a form will be appear need to create it in add.ejs
    await productModel.create(product);//create is method provided by mongoDb to insert elements
    res.redirect("/products");
}
const addProductForm=async (req,res)=>{
    res.render("products/add");
}
const deleteProduct=async (req,res)=>{
    const id=req.params.id;  //capturing request parameter
    await productModel.findByIdAndDelete(id); //method to a delete a entry in products collection with id 
    res.redirect("/products");
}
const editProductForm=async (req,res)=>{
    const id =req.params.id;
    const product=await productModel.findOne({_id:id});
    res.render("products/edit",{product});
}
const saveproduct=async(req,res)=>{
    const id=req.params.id;
    await productModel.findByIdAndUpdate(id,req.body);
    res.redirect("/products");
}

//users name email password role(user,admin)
export {getProducts,addProduct,addProductForm,deleteProduct,editProductForm,saveproduct}