const userController = require("../controller/userController")
const jwt = require('jsonwebtoken')
require('dotenv').config()


const middleware = (req,res,next)=>{

   


console.log("middleware running");



const token =  req.headers.authorization.split(" ")[1]

if(!token){
    throw new Error("Token Doesn't exist")
}
console.log(token);
console.log("hi");
var decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)



req.user = {
    id:decoded.id,
    name:decoded.name
}

console.log("hi");
 next()


}
module.exports = middleware



