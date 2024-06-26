// User.js

const mongoose = require("mongoose");
const CryptoJS = require("crypto-js");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// Encrypt password before saving
UserSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    this.password = CryptoJS.AES.encrypt(this.password, "secret123").toString();
  }
  next();
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
