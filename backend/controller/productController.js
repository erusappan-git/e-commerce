import Products from "../models/products.js";
import ErrorHandler from "../utils/errorHandlerClass.js";


export const getProducts = async(req , res) => {

    const products = await Products.find({});

    res.status(200).json(products);

}

export const newProduct = async (req , res) => {

    const product = await Products.create(req.body);

    res.status(201).json({
        product
    })

}

export const getProductDetails = async (req, res) =>{

    const product = await Products.findById(req.params.id);

    res.status(200).json({product});
}

export const updateProduct = async (req, res) => {

    let product = await Products.findById(req.params.id);

    if(!product){
        res.status(404).json({
            error: "Product not Found"
        })
    }

    product = await Products.findByIdAndUpdate(req.params.id, req.body, {new:true});

    res.status(200).json({product})

}

export const deleteProduct = async (req, res) => {

    let product = await Products.findById(req.params.id);

    if(!product){
        res.status(404).json({
            error: "Product not Found"
        })
    }

    product = await Products.deleteOne({_id : req.params.id});

    res.status(200).json({product});

}