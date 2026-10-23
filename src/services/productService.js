
import { findAllProducts } from "../repositories/productRepository.js";
import { Product } from "../domain/productDomain.js";

export async function getAllProducts() {
    const products = await findAllProducts();

    return products.map(product => new Product(product));
}
