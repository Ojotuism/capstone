
const globalErrorHandler = (err, req, res, next)=>{
    //Status
    //Message
    //Stack
    const stack = err.stack;
    const message = err.message;
    const status = err.status ? err.status: "failed";
    const statusCode = err?.statusCode ? err.statusCode: 500;
    //Send the response
    res.status(statusCode).json({
        message,
        stack,
        status,
    }); 
};

module.exports = globalErrorHandler;