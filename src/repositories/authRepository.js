
import { adminSupabase } from "../config/clientDB.js";

export async function findStaffByStaffId(staffId) {
    const { data, error } = await adminSupabase
    //calls the stored function
        .rpc("get_staff_by_staff_id", {
            p_staff_id: staffId
        });

    if (error) {
        throw new Error(error.message);
    }

    return data?.[0] ?? null;
}
