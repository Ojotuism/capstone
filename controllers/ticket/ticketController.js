//Creat ticket
const ticketController = async(req, res)=>{
    try{
        res.json({
            status: "success",
            data: "ticket created",
        })
    }catch(error){
        res.json(error.message);
    }
};
//Single ticket
const singleTicketController =  async(req, res)=>{
    try{
        res.json({
            status: "success",
            data: "single ticket route",
        })
    }catch(error){
        res.json(error.message);
    }
};
//All tickets
const allTicketsController = async(req, res)=>{
    try{
        res.json({
            status: "success",
            data: "all tickets route",
        })
    }catch(error){
        res.json(error.message);
    }
}; 
//Update ticket
const updateTicketController = async(req, res)=>{
    try{
        res.json({
            status: "success",
            data: "update ticket route",
        })
    }catch(error){
        res.json(error.message);
    }
};
//Delete ticket
const deleteTicketController = async(req, res)=>{
    try{
        res.json({
            status: "success",
            data: "delete ticket route",
        })
    }catch(error){
        res.json(error.message);
    }
};


module.exports ={
ticketController,
singleTicketController,
allTicketsController,
updateTicketController,
deleteTicketController,
};