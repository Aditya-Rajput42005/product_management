import express from "express";
import Product from "../model/products.js";

const router = express.Router();

// Get all product
router.get("/", async (req, res) => {
  const product = await Product.find({});
  try {
    return res.status(200).json({ success: true, message: product });
  } catch (err) {
    console.err(err.message);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server error" });
  }
});

// Create product
router.post("/", async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.url) {
    return res
      .status(400)
      .json({ success: false, message: "Fill all the details" });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    console.log("Product is saved");
    res.status(201).json({ success: true, message: "Product is saved" });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: `server errror ${err.message}` });
  }
});

// Delete product
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ success: true, message: `Product is deleted` });
  } catch (err) {
    res.status(404).json({ success: false, message: "Product not found" });
    console.err(`Here is the err : ${err.message}`);
  }
});

// Update Product
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    return res
      .status(200)
      .json({ success: true, message: "Product details are updated" });
  } catch (err) {
    console.err(err.message);
    return res.status(500).json({ success: false, message : "Internal Server error" });
  }
});

export default router;

