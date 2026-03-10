import userModel from "../models/userModel.js";

const getUsers =async (req,res) =>{
    const users= await userModel.find(); //a async function is used here for retriveal of product data using find method and used await keyword
    res.render("users/index",{users}); // we send this render to admin panel where it is used for update products data
}
const addUser =async (req,res)=>{
    const user =req.body;
    await userModel.create(user);
    res.redirect("/users");
}
const addUserForm=async (req,res)=>{
    res.render("users/add");
}
const deleteUser=async (req,res)=>{
    const id=req.params.id;
    await userModel.findByIdAndDelete({_id:id});
    res.redirect("/users");
}
const editUserForm =async (req,res)=>{
    const id=req.params.id;
    const user=await userModel.findOne({_id:id});
    res.render("users/edit",{user});
}
const saveUser =async (req,res)=>{
    const id =req.params.id;
    await userModel.findByIdAndUpdate(id,req.body);
    res.redirect("/users");
}
 export {getUsers,addUserForm,addUser,deleteUser,editUserForm,saveUser};