// handler.js

import ConnectDb from "../../../middleware/mongooes";
import User from "../../../models/User"; // Import the User model correctly

const CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method == "POST") {
    const { name, email, password } = req.body;
    
    try {
      // Create a new user instance
      let newUser = new User({
        name,
        email,
        password: password, // Assuming password is already encrypted in the request
      });

      // Save the user to the database
      await newUser.save();

      res.status(200).json({ success: "success" });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Server error" });
    }
  } else {
    res.status(400).json({ error: "Not allowed" });
  }
};

export default ConnectDb(handler);
