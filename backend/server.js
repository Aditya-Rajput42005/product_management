import express, { urlencoded } from "express";
import Product from "./model/products.js";
import { connectDB } from "./config/db.js"; // Don't forget to import this!

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Get all product
app.get("/api/products", async (req, res) => {
  const product = await Product.find({});
  try {
    return res.status(200).json({ success: true, message: product });
  } catch (err) {
    console.error(err.message);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server error" });
  }
});

// Create product
app.post("/api/products", async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Poora form bhar na laude" });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    console.log("Product is saved");
    res.status(201).json({ success: true, message: "product save ho gaya" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `server errror ${error.message}` });
  }
});

// Delete product
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ success: true, message: `Product is deleted` });
  } catch (error) {
    res.status(404).json({ success: false, message: "Product not found" });
    console.error(`Here is the error : ${error.message}`);
  }
});

// Update Product
app.put("/api/products/:id", async (req, res) => {
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
    console.error(err.message);
    return res.status(500).json({ success: false, message : "Internal Server Error" });
  }
});

// Database connection
connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((err) => {
    console.error(err.message);
  });
