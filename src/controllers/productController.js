
import { getAllProducts } from "../services/productService.js";

export async function getProducts(req, res) {
    try {
        const products = await getAllProducts();

        res.status(200).json({
            success: true,
            data: products
        });
    } catch (error) {
        console.error("Failed to fetch products:", error.message);

        res.status(500).json({
            success: false,
            message: "Unable to fetch products"
        });
    }
}
