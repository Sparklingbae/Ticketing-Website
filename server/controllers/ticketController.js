const Ticket = require('../models/Ticket');
const Event = require('../models/Event');

exports.bookTicket = async (req, res) => {
  const { eventId } = req.body;

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }

    const ticket = new Ticket({ event: eventId, user: req.user.id });
    await ticket.save();

    event.tickets.push(ticket.id);
    await event.save();

    res.json(ticket);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getUserTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ user: req.user.id }).populate('event', 'title date');
    res.json(tickets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
