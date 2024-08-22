const bcrypt = require("bcryptjs");
const User = require("../../model/User/User");
const generateToken = require("../../utils/generateToken");
const getTokenFromHeader = require("../../utils/getTokenFromHeader");
const {appError, AppError} = require("../../utils/appError");

//Register 
const userRegisterController = async(req, res, next)=>{
const {firstname,lastname,email,password} = req.body;    
    try{
//Check if email exist
const userFound = await User.findOne({email});
if(userFound){
    return next(new AppError("User Already Exist", 500));

    
}
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //create the user
    const user = await User.create({
        firstname,
        lastname,
        email,
        password: hashedPassword,
    });
        res.json({
            status: "success",
            data: user,
        })
    }catch(error){
        next(appError(error.message));
    }
};
//Login
const userLoginController = async(req, res)=>{
    const {email, password}  = req.body
    try{
//1. Check if email exist
const userFound = await User.findOne({email});
if(!userFound){
    return res.json({
        message: "Invalid login credentials"
    });
}
        res.json({
            status: "success",
            data:{
                firstname: userFound.firstname,
                lastname: userFound.lastname,
                email: userFound.email,
                isCreator: userFound.isCreator,
                token: generateToken(userFound._id),
            },
        });
//2. Verify password
const isPasswordMatched = await bcrypt.compare(password, userFound.password);
if(!isPasswordMatched){
    return res.json({
        message: "Invalid login credentials"
    });
}
        res.json({
            status: "success",
            data: "user login",
        })
    }catch(error){
        res.json(error.message);
    }
};
//Get all users 
const allUserController = async(req, res)=>{
    try{
        res.json({
            status: "success",
            data: "all users profile",
        })
    }catch(error){
        res.json(error.message);
    }
}; 
//Get single user
const singleUserController = async(req, res)=>{
    try{    
 const user = await User.findById(req.userAuth);       
        res.json({
            status: "success",
            data: User,
        })
    }catch(error){
        res.json(error.message);
    }
};
//Update user
const updateUserController = async(req, res)=>{
    try{
        res.json({
            status: "success",
            data: "update user route",
        })
    }catch(error){
        res.json(error.message);
    }
};
//Delete user
const deleteUserController = async(req, res)=>{
    try{
        res.json({
            status: "success",
            data: "delete user route",
        })
    }catch(error){
        res.json(error.message);
    }
};

module.exports = {
    userRegisterController,
    userLoginController,
    allUserController,
    singleUserController,
    updateUserController,
    deleteUserController,
};