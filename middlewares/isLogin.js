const { appError } = require("../utils/appError");
const getTokenFromHeader = require("../utils/getTokenFromHeader");
const verifyToken = require("../utils/verifyToken");

const isLogin = (req, res, next)=>{
    //1. Get token from header
    const token = getTokenFromHeader(req)  
     //2. Verify the token
     const decodedUser = verifyToken(token);
      //3. Save the user into req Obj
      req.userAuth = decodedUser.id;
    if(!decodedUser){
        return next(appError("Invalid/Expired token, please login again", 500));
    }else{
        next();
    }
   
   
};

module.exports = isLogin;