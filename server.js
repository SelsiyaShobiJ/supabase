
import express from "express";
import "dotenv/config";
import productRoutes from "./src/routes/productRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Parse incoming JSON request bodies.so controller can access the values
app.use(express.json()); //middleware
//Serve static files from the public folder
app.use(express.static("public"));

// Register product API routes
app.use("/api/products", productRoutes);
// Register satff-auth API routes
app.use("/api/auth", authRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
