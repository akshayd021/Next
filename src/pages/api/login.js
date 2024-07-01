import ConnectDb from "../../../middleware/mongooes";
import CryptoJS from "crypto-js";
import User from "../../../models/User";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;

      // Check if the email and password are provided
      if (!email || !password) {
        return res.status(400).json({ success: false, error: "Email and password are required!" });
      }

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ success: false, error: "User not found!" });
      }

      const bytes = CryptoJS.AES.decrypt(user.password, "secret123");
      const originalText = bytes.toString(CryptoJS.enc.Utf8);

      if (password !== originalText) {
        return res.status(401).json({ success: false, error: "Invalid credentials!" });
      }

      const token = jwt.sign(
        { email: user.email, name: user.name },
        "jwtsecret",
        { expiresIn: "2d" }
      );

      res.status(200).json({ success: true, token });

    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ success: false, error: "Server error. Please try again." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ success: false, error: `Method ${req.method} not allowed` });
  }
};

export default ConnectDb(handler);
