import express, { urlencoded } from "express";
import Product from "./model/products.js";
import { connectDB } from "./config/db.js"; 
import productRouter from "./routes/productRouter.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Handels all product routing
app.use("/api/products", productRouter);

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
