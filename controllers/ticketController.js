const Ticket = require('../models/ticketModel');

// Get all tickets
exports.getTickets = async (req, res, next) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (error) {
    next(error);
  }
};

// Create a new ticket
exports.createTicket = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    // Check if both title and description are provided
    if (!title || !description) {
      return res.status(400).json({ message: 'Both title and description are required' });
    }

    const ticket = new Ticket({ title, description });
    await ticket.save();

    res.status(201).json(ticket);
  } catch (error) {
    next(error);
  }
};

// Get ticket by ID
exports.getTicketById = async (req, res, next) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
    res.json(ticket);
  } catch (error) {
    next(error);
  }
};

// Update a ticket
exports.updateTicket = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    // Validate inputs for the update
    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required for update.' });
    }

    const ticket = await Ticket.findByIdAndUpdate(
      req.params.id,
      { title, description },  // Ensure only title and description are updated
      { new: true, runValidators: true }
    );
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
    res.json(ticket);
  } catch (error) {
    next(error);
  }
};

// Delete a ticket
exports.deleteTicket = async (req, res, next) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
    res.json({ message: 'Ticket deleted' });
  } catch (error) {
    next(error);
  }
};
