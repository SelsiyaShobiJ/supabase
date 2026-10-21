
import { findAllProducts } from "../repositories/productRepository.js";

export async function getAllProducts() {
    const products = await findAllProducts();

    return products.map(product => ({
        ...product,
        price: Number(product.price)
    }));
}
