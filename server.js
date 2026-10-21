
import express from "express";
import "dotenv/config";
import productRoutes from "./src/routes/productRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Parse incoming JSON request bodies
app.use(express.json());

// Register product API routes
app.use("/api/products", productRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
