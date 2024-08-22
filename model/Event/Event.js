const mongoose = require("mongoose");
//CREATE THE SCHEMA
const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Event Title of event required"],
  },
  venue: {
    type: String,
    required: [true, "Event Venue of event required"],
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  description: {
    type: String,
    required: [true, "Event Description of event required"],
  },
  createdAt:{
    type: Date,
    default: Date.now
  },
  startDateTime:{
    type: Date,
    default: Date.now
  },
  endDateTime:{
    type: Date,
    default: Date.now
  },
  price:{
    type: String

  },
  isFree:{
    type: Boolean,
    default: false
  },
},
{
  timestamps: true,

});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
