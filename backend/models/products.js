import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true, "Please enter a Product Name"],
        maxLength:[200, "Product name do not exceeds 200 chars"]
    },
    price:{
        type:Number,
        required:[true, "Please enter a product price"],
        maxLength:[5, "Product price do not exceed 5 digits"],
    },
    description:{
        type:String,
        required:[false, ""]
    },
    ratings:{
        type:Number,
        default:0
    },
    images:[{
        public_id:{
            type:String,
            required: false
        },
        url:{
            type:String,
            required: false
        }
    }],
    category:{
        type: String,
        required: [false, ""],
        enum:{
            values:["Food", "Books", "Sports"],
            message:"Please Select Category",
        }
    },
    seller:{
        type: String,
        required:[false, "Please enter a Seller"],
    },
    stock:{
        type:Number,
        required:[false, "Please enter a Stock"],
    },
    numOfReviews:{
        type:Number,
        default:0,
    },
    reviews:[
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"User",
                required: false,
            },
            rating:{
                type:Number,
                required:false,
            },
            comment:{
                type:String,
                required:false,
            }
        }
    ],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:false
    }

}, {timestamps:true});

export default mongoose.model("Products", productSchema);