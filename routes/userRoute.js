import express from "express"
import { getUsers,addUserForm,addUser,deleteUser,editUserForm,saveUser} from "../controllers/userController.js"; //we fetched data hereand imported

const userRouter = express.Router();//created new router initialized in index.js
userRouter.get("/",getUsers);//get method is to display "/users" page
userRouter.get("/add",addUserForm);
userRouter.post("/add",addUser);
userRouter.get("/:id/delete",deleteUser);//:id =request parameter 
userRouter.get("/:id/edit",editUserForm);
userRouter.post("/:id/save",saveUser);
export {userRouter}