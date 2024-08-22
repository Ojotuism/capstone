const mongoose = require('mongoose');
//CREATE THE SCHEMA
const ticketSchema = new mongoose.Schema({

});








const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;
