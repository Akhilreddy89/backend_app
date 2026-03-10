import express from "express"
import { addProductForm, addProduct, getProducts,deleteProduct,editProductForm,saveproduct } from "../controllers/productController.js"; //we fetched data hereand imported

const productRouter = express.Router();//created new router initialized in index.js


productRouter.get("/",getProducts);//get method is to display "/products" page
productRouter.get("/add",addProductForm);
productRouter.post("/add",addProduct);
productRouter.get("/:id/delete",deleteProduct);//:id =request parameter 
productRouter.get("/:id/edit",editProductForm);
productRouter.post("/:id/save",saveproduct);
export {productRouter}