
import { adminSupabase } from "../config/clientDB.js";

export async function findStaffByStaffId(staffId) {
    const { data, error } = await adminSupabase
        .from("staff")
        .select("id, staff_id, auth_user_id")
        .eq("staff_id", staffId)
        .maybeSingle();

    if (error) {
        throw new Error(error.message);
    }

    return data;
}
