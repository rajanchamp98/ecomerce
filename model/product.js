import mongoose from 'mongoose'
import { Schema } from 'mongoose';


// Schema For the products data 

const productsSchema=new Schema(
    {
        title: {type:String,required:[true,"title is required Field"]},
        description: String,
        price: Number,
        discountPercentage: Number,
        rating: Number,
        stock: Number,
        brand: String,
        category: String,
        thumbnail: String,
        images: [String]

    }
)

 const Product=mongoose.model('Product',productsSchema);
 export default Product

