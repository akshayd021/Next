// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Forgot from "../../../models/Forgot";
export default function handler(req, res) {
 let token = 'dddsd'
  let forgot =  new Forgot({
    email: req.body.email,
    token: token
  })

   let email = `we have sent you this email in resonce to your request to your reset password on codewear.com
   
   to reset your password please follow this below link
   
   
   <a href='http://localhost:3000/api/forgot?token=${token}'>  </a>
   
   <br/> <br/>
   
   we recommend that you keep your password secure and not share to anyone , If ypu fill your password has been `




    res.status(200).json({ name: "John Doe" });
  }
  