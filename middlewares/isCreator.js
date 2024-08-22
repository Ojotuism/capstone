const User = require("../model/User/User");
const { appError } = require("../utils/appError");
const getTokenFromHeader = require("../utils/getTokenFromHeader");
const verifyToken = require("../utils/verifyToken");

const isCreator = async (req, res, next)=>{
    //GET TOKEN FROM HEADER
    const token = getTokenFromHeader(req);
    //VERIFY THE TOKEN
    const decodedUser = verifyToken(token);
    //SAVE THE USER INTO THE REQ OBJ
    req.userAuth = decodedUser.id;
    // FIND THE USER IN THE DATABASS
    const user = await User.findById(decodedUser.id)
    // CHECK IF THE USER IS A CREATOR
    if(user.isCreator){
      return next()
    }else{
      return next(appError('Access denied,Creator only', 403)); 
    }
  };
    
  
  module.exports = isCreator;