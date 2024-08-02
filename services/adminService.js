import { adminModal } from "../models/adminModal";

export async function signInAdmin(email, password) {
  try {
    const user = await adminModal.findOne({ email: email });

    if (!user) {
      return {
        success: false,
        message: "Authentication failed. User not found.",
      };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return {
        success: false,
        message: "Authentication failed. Invalid password.",
      };
    }

    const accessToken = generateAccessToken(user._id, user.role);
    const refreshToken = generateRefreshToken(user._id, user.role);

    return {
      success: true,
      message: "Authentication successful",
      accessToken,
      refreshToken,
      role: user.role,
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Internal Server Error" };
  }
}
