import express from "express";
import { deleteProduct, getProductDetails, getProducts, newProduct, updateProduct } from "../controller/productController.js";
import asyncHandler from "../middleware/asyncHandler.js";

const router = express.Router();

router.route("/products").get(getProducts);
router.route("/admin/products").post(newProduct);
router.route("/products/:id").get(asyncHandler(getProductDetails));
router.route("/admin/products/:id").put(updateProduct).delete(deleteProduct);

export default router;