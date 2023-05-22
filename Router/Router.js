import express, { Router } from "express";
import {getProduct,getProductWithId,createProduct,replaceProducts,modifyProduct,deleteProduct} from '../controller/product.js';
import {getUser,getUserWithId,createUser,replaceUser,modifyUser,deleteUser} from '../controller/user.js'

// Product Router
const productRouter=express.Router();

productRouter.get("/", getProduct)
.get("/:id", getProductWithId)
.post("/", createProduct)
.put("/", replaceProducts)
.patch("/", modifyProduct)
.delete("/", deleteProduct)


// User Router

const userRouter=express.Router();
userRouter.get("/", getUser)
.get("/:id", getUserWithId)
.post("/", createUser)
.put("/", replaceUser)
.patch("/", modifyUser)
.delete("/", deleteUser)




export {productRouter,userRouter};


