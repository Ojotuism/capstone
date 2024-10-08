//App Error
const appError = (message, statusCode)=>{
    let error = new Error(message)
    error.statusCode = statusCode ? statusCode: 500;
    error.stack = error.stack;
    return error; 
};
//Error Class
class AppError extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
        this.status = "failed";
    }
}

module.exports = {appError, AppError};