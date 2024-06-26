import ConnectDb from "../../../middleware/mongooes";
var CryptoJS = require("crypto-js");
const User = require("../../../models/User");

const handler = async (req, res) => {
  if (req.method == "POST") {
    let user = await User.findOne({ email: req.body.email });
    var bytes = CryptoJS.AES.decrypt(user?.password, "secret123");
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    if (user) {
      if (req.body.email == user.email && req.body.password == originalText) {
        var token = jwt.sign(
          { email: user?.email, name: user?.name },
          "jwtsecret",
          { expiresIn: "2d" }
        );
        res.status(200).json({ success: true, token });
      } else {
        res.status(200).json({ success: false, error: " check karo" });
      }
    } else {
      res.status(200).json({ success: false, error: "user Not found !" });
    }
  }
};
export default ConnectDb(handler);
