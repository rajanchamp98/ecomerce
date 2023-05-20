import { readFileSync } from "fs";
import Product from '../model/product.js'

const data = JSON.parse(readFileSync("data.json", "utf-8"));
const products = data.products; 


// All Logic Related to CRUD are Written Here This is Controller 

const getProduct = async (req, res) => {
  const doc=await Product.find()
  res.json(doc)
//  res.send("Hello")
  };
  
  const getProductWithId = async (req, res) => {
    // const product = products.find((p) => {
    //   return p.id === +req.params.id;
    // });
    // res.json(product);
    // console.log(req.params.id);
    const product= await Product.findOne({id:+req.params.id})
    res.json(product);
  };
  
  const createProduct = async (req, res) => {
    const newProduct = req.body;
    // products.push(newProduct);
    // res.sendStatus(201);
    const newPrd=new Product(newProduct)
    newPrd.save().then((data)=>{
      res.send(data);
    }).catch((err)=>{
      // const error=JSON.parse(err)
      res.send(err)
    })
    
  };
  
  const replaceProducts = async(req, res) => {
    const { id } = req.body;
    // console.log(id)
    const prdToAdd = req.body;
    // const indexPrd = products.findIndex((p) => p.id === +id);
    // products.splice(indexPrd, 1, prdToAdd);
    // res.sendStatus(201);
    const replacedValue=await Product.replaceOne({"id":+id},prdToAdd)
    console.log(replacedValue);
    res.send(replacedValue);
  };
  const modifyProduct = async(req, res) => {
    const { id } = req.body;
    const updateDetails = req.body;
    // const product = products.find((p) => p.id === +id);
    const modifyStatus= await Product.updateOne({"id":id},updateDetails)
    // const prdFinalUpdate = { ...product, ...updateDetails };
    // const indexPrd = products.findIndex((p) => p.id === +id);
    // products.splice(indexPrd, 1, prdFinalUpdate);
    res.send(modifyStatus);
  };
  const deleteProduct =async(req, res) => {
    const { _id } = req.body;
    // const indexPrd = products.findIndex((p) => p.id === +id);
  
    // const del = products.splice(indexPrd, 1);
  
    // res.send(del);
    // console.log(_id)
    const returnedValue=await Product.findByIdAndDelete({"_id":_id})
    // res.send(returnedValue);



  };

  export {getProduct,getProductWithId,createProduct,replaceProducts,modifyProduct,deleteProduct};