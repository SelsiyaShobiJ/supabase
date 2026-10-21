
import { supabase } from "../config/supabase.js";

export async function findAllProducts() {
    const { data, error } = await supabase
        .from("products")
        .select("id, name, price")
        .order("id");

    if (error) {
        throw new Error(error.message);
    }

    return data;
}
