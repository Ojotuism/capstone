const express = require("express");
const { ticketController,
     singleTicketController, 
     allTicketsController,
     updateTicketController,
     deleteTicketController} = require("../../controllers/ticket/ticketController");
    
const ticketRouter = express.Router();
//post/api/v1/ticket
ticketRouter.post('/', ticketController);
//get/api/v1/ticket/title/:id
ticketRouter.get('/title/:id', singleTicketController);
//get/api/v1/ticket
ticketRouter.get('/', allTicketsController);
//update/api/v1/ticket/:id
ticketRouter.put('/:id', updateTicketController);
//delete/api/v1/ticket/:id
ticketRouter.delete('/:id', deleteTicketController);

module.exports = ticketRouter;