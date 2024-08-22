const express = require("express");
const { userRegisterController, 
    userLoginController, 
    allUserController,
    singleUserController,
    deleteUserController,
    updateUserController} = require("../../controllers/user/userController");
const isLogin = require("../../middlewares/isLogin");
const userRouter = express.Router();
//post/api/v1/users/register
userRouter.post('/register', userRegisterController);
//post/api/v1/users/login
userRouter.post('/login', userLoginController);
//get/api/v1/users/profile
userRouter.get('/', allUserController);
//get/api/v1/users/profile/:id
userRouter.get('/profile',isLogin, singleUserController);
//put/api/v1/users/:id)
userRouter.put('/:id', updateUserController);
//delete/api/v1/users/:id
userRouter.delete('/:id',deleteUserController); 


module.exports = userRouter; 