const Event = require("../../model/Event/Event");
const User = require("../../model/User/User");

//Create event
const eventController = async(req, res,next)=>{
    const {title,venue,description} = req.body
    try{
        const event = await Event.create({
            title, 
            venue, 
            description,
            user:req.userAuth
        });
        //Save event
        await event.save();
        res.json({
            status: "success",
            data: "event created",
        })
    }catch(error){
        res.json(error.message);
    }
};
//All event
const allEventController = async(req,res,next)=>{
    try{
     const event = await Event.find();   
        res.json({
            status: "success",
            data: "all events route",
        })
    }catch(error){
        res.json(error.message);
    }
};
//Single event
const singleEventController = async(req, res,next)=>{
    try{
    const event = await Event.findById(req.params.id);    
        res.json({
            status: "success",
            data: "single event route",
        })
    }catch(error){
        res.json(error.message);
    }
};
//Update event
const UpdateEventController = async(req, res,next)=>{
    const {title,venue,descrition} = req.body;
    try{
        const event = await Event.findByIdAndUpdate(req.params.id,{
            title,
            venue,
            descript
        },
        {
            new: true, runValidators: true,
        });
        res.json({
            status: "success",
            data: "update event route",
        })
    }catch(error){
        res.json(error.message);
    }
}; 
//Delete event
const deleteEventController = async(req, res,next)=>{
    try{
 await Event.findByIdAndDelete(req.params.id);       
        res.json({
            status: "success",
            data: "delete event route",
        })
    }catch(error){
        res.json(error.message);
    }
}; 

module.exports = {
    eventController,
    allEventController,
    singleEventController,
    UpdateEventController,
    deleteEventController,
};