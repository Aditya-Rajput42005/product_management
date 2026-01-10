import express from "express";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/productRouter.js";
import path from "path";

const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Dev-only health check
if (process.env.NODE_ENV !== "production") {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
}

// API routes
app.use("/api/products", productRouter);

// Production frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend", "dist")));

  // React Router fallback (Express 5 safe)
  app.use((req, res) => {
    res.sendFile(
      path.join(__dirname, "Frontend", "dist", "index.html")
    );
  });
}

// Start server after DB connection
const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err.message);
  });
