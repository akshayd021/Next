const mongoose = require("mongoose");

const ForgotSchema = new mongoose.Schema(
  {
    userid: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    token: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Forgot || mongoose.model("Forgot", ForgotSchema);
