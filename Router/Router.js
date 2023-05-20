import express, { Router } from "express";
import {getProduct,getProductWithId,createProduct,replaceProducts,modifyProduct,deleteProduct} from '../controller/product.js';



const productRouter=express.Router();

productRouter.get("/", getProduct)
.get("/:id", getProductWithId)
.post("/", createProduct)
.put("/", replaceProducts)
.patch("/", modifyProduct)
.delete("/", deleteProduct)


export {productRouter};


