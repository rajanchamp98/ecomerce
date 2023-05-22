import * as dotenv from 'dotenv';
dotenv.config()
import cors from 'cors';
 
import express from "express";
import mongoose from 'mongoose'
import path,{dirname} from 'path'
// import {getProduct,getProductWithId,createProduct,updateProducts,modifyProduct,deleteProduct} from './controller/product.js';
import {productRouter,userRouter} from "./Router/Router.js"

import { fileURLToPath } from 'url';

const __dirname=dirname(fileURLToPath(import.meta.url))
// console.log(__dirname);

// import { readFileSync } from "fs";

// const data = JSON.parse(readFileSync("data.json", "utf-8"));
// const products = data.products;



//----- Model---------------------
// const getProduct = (req, res) => {
//   res.json(data);
// };

// const getProductWithId = (req, res) => {
//   const product = products.find((p) => {
//     return p.id === +req.params.id;
//   });
//   res.json(product);
// };

// const createProduct = (req, res) => {
//   const newProduct = req.body;
//   products.push(newProduct);
//   res.sendStatus(201);
// };

// const updateProducts = (req, res) => {
//   const { id } = req.body;
//   // console.log(id)
//   const prdToAdd = req.body;
//   const indexPrd = products.findIndex((p) => p.id === +id);
//   products.splice(indexPrd, 1, prdToAdd);
//   res.sendStatus(201);
// };
// const modifyProduct = (req, res) => {
//   const { id } = req.body;
//   const updateDetails = req.body;
//   const product = products.find((p) => p.id === +id);
//   const prdFinalUpdate = { ...product, ...updateDetails };
//   const indexPrd = products.findIndex((p) => p.id === +id);
//   products.splice(indexPrd, 1, prdFinalUpdate);
//   res.sendStatus(201);
// };
// const deleteProduct = (req, res) => {
//   const { id } = req.body;
//   const indexPrd = products.findIndex((p) => p.id === +id);

//   const del = products.splice(indexPrd, 1);

//   res.send(del);
// };


//-------------------------------------------------------------
// Database Connection


main().catch(err => onsole.log(err));

async function main() {
  await mongoose.connect(process.env.CONNECTION);
  // console.log("Database Connected Sucessfully :")
}

// Schema Creation :-

// const productsSchema=new Schema(
//     {
//         title: {type:String},
//         description: String,
//         price: Number,
//         discountPercentage: Number,
//         rating: Number,
//         stock: Number,
//         brand: String,
//         category: String,
//         thumbnail: String,

//     }
// )








const server = express();

// server.use((req,res,next)=>{
//     if(req.query.password==="12345")
//     next();
//     else
//     res.sendStatus(401);
// })

server.use(express.json());
server.use(cors())
// server.use(express.static(path.resolve(process.env.BUILD)))
server.use("/products",productRouter); 
server.use("/users",userRouter); 

// Wild card to acces Routes of Frontend Part 
server.use("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname,"dist","index.html"));
})


// To get Data from Json :-
// server.get("/products", getProduct);
// GET data based upon id 
// server.get("/products/:id", getProductWithId);
// // POST Request 
// server.post("/products", createProduct);
// PUT Request --->It replaces Original Data And Creates New Data
// server.put("/products", updateProducts);
// Patch Request --->It Update some Details
// server.patch("/products", modifyProduct);
// Delete request
// server.delete("/products", deleteProduct);
server.listen(process.env.PORT);
