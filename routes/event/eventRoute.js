const express = require("express");
const { eventController, 
    allEventController, 
    singleEventController,
    UpdateEventController,
    deleteEventController} = require("../../controllers/event/eventController");
const isLogin = require("../../middlewares/isLogin");
const isCreator = require("../../middlewares/isCreator");
const eventRouter = express.Router();
 //post/api/v1/event
eventRouter.post('/',isLogin,isCreator, eventController);
//get/api/v1/event
eventRouter.get('/', allEventController);
//get/api/v1/event/:id
eventRouter.get('/title/:id', singleEventController);
//update/api/v1/event/:id
eventRouter.put('/:id',isLogin,isCreator, UpdateEventController);
//delete/api/v1/event/:id
eventRouter.delete('/:id',isLogin,isCreator, deleteEventController);

module.exports = eventRouter;