
import { supabase } from "../config/db.js";

export async function findAllProducts() {
    const { data, error } = await supabase
        .rpc("get_all_products");

    if (error) {
        throw new Error(error.message);
    }

    return data;
}
