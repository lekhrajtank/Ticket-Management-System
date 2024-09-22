const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

router
  .route('/')
  .get(ticketController.getTickets)
  .post(ticketController.createTicket);

router
  .route('/:id')
  .get(ticketController.getTicketById)
  .put(ticketController.updateTicket)
  .delete(ticketController.deleteTicket);

module.exports = router;
