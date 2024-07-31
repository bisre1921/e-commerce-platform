import express from "express";
// import products from "../data/products.js";
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/ProductModel.js";
const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
}));

router.get("/:id", asyncHandler(async (req, res) => {
    // const product = products.find((p) => p._id === Number(req.params.id));
    const product = await Product.findById(req.params.id);

    if (!product) {
        res.status(404);
        throw new Error("Product not found");
    }
    
    res.json(product);
}));


export default router;