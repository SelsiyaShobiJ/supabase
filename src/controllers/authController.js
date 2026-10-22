
import { authenticateStaff } from "../services/authService.js";

export async function loginStaff(req, res) {
    const { staffId, password } = req.body;

    // Validate the incoming data
    if (
        typeof staffId !== "string" ||
        typeof password !== "string" ||
        !staffId.trim() ||
        !password
    ) {
        return res.status(400).json({
            success: false,
            message: "Staff ID and password are required"
        });
    }

    try {
        const result = await authenticateStaff(
            staffId.trim(),
            password
        );

        if (!result.success) {
            return res.status(401).json(result);
        }

        return res.status(200).json(result);
    } catch (error) {
        console.error("Staff authentication error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Unable to process login"
        });
    }
}
