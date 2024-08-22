const express = require ("express");
require("dotenv").config();
const userRouter = require("./routes/user/userRoute");
const eventRouter = require("./routes/event/eventRoute");
const ticketRouter = require("./routes/ticket/ticketRoute");
const globalErrorHandler = require("./middlewares/globalErrorHandler");

require("./config/dbConnect");
const app = express();
app.get('/', (req,res)=>{
res.send("CAPSTONE PROJECT")
});
//MIDDLEWARES
app.use(express.json())//pass incoming payload 

//---------------------
///ROUTES
//users routes
app.use("/api/v1/users/", userRouter); 
///event routes
app.use("/api/v1/event/", eventRouter);
//ticket routes
app.use("/api/v1/ticket/", ticketRouter);
//---------------------
///ERROR HANDLERS MIDDLEWARES
app.use(globalErrorHandler);
//404 Error
app.use("*", (req, res)=>{
    console.log(req.originalUrl);
    res.status(404).json({
        message: `${req.originalUrl} - Route Not Found`,
    });
});

const PORT = process.env.PORT|| 8000;
app.listen(PORT, console.log(`server is running on ${PORT}`));