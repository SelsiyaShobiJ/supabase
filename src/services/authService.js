import { adminSupabase } from "../config/clientDB.js";
import { supabase } from "../config/db.js";
import { findStaffByStaffId } from "../repositories/authRepository.js";

export async function authenticateStaff(staffId, password) {
    // Step 1: Find the staff record
    const staff = await findStaffByStaffId(staffId);

    if (!staff) {
        return {
            success: false,
            message: "Invalid staff ID or password"
        };
    }

    // Step 2: Find the linked Supabase Auth user
    const { data: userData, error: userError } =
        await adminSupabase.auth.admin.getUserById(
            staff.auth_user_id
        );

    if (userError || !userData.user?.email) {
        throw new Error("Unable to find linked staff account");
    }

    // Step 3: Verify the password with Supabase Auth
    const { data, error } = await supabase.auth.signInWithPassword({
        email: userData.user.email,
        password
    });

    if (error || !data.session) {
        return {
            success: false,
            message: "Invalid staff ID or password"
        };
    }

    // Step 4: Return the authenticated session
    return {
        success: true,
        message: "Login successful",
        staff: {
            id: staff.id,
            staffId: staff.staff_id
        },
        session: data.session
    };
}
