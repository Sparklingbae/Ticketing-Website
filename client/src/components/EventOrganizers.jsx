// src/components/EventOrganizers.jsx

import React, { useState, useEffect } from 'react';
import Payment from './Payment';
import AttendeeList from './AttendeeList';
import CheckInSystem from './CheckInSystem';
import MessagingSystem from './MessagingSystem';
import FeedbackForms from './FeedbackForms';
import NetworkingTools from './NetworkingTools';
import './EventOrganizers.css';

const EventOrganizers = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasPaid, setHasPaid] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [eventDetails, setEventDetails] = useState({
    eventName: '',
    eventDate: '',
    eventLocation: '',
    eventDescription: '',
    eventBanner: null,
    tickets: []
  });
  const [attendees, setAttendees] = useState([]);

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    // Here you would send the signup request to your backend API
    // For demonstration, we'll assume the signup is successful
    console.log('Organizer signed up:', { name, email });
    setIsAuthenticated(true); // Set the user as authenticated
  };

  const handlePaymentSuccess = () => {
    setHasPaid(true);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      setIsAuthenticated(false); // Check for authentication status from your auth logic
    }
  }, [isAuthenticated]);

  const handleEventInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'eventBanner') {
      setEventDetails((prevDetails) => ({
        ...prevDetails,
        [name]: files[0], // Use the first selected file
      }));
    } else {
      setEventDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };

  const handleTicketChange = (index, field, value) => {
    const newTickets = [...eventDetails.tickets];
    newTickets[index] = { ...newTickets[index], [field]: value };
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      tickets: newTickets,
    }));
  };

  const addTicket = () => {
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      tickets: [
        ...prevDetails.tickets,
        { ticketType: '', ticketPrice: '', ticketQuantity: '' }
      ],
    }));
  };

  const handleEventCreation = (e) => {
    e.preventDefault();
    // Here you would send the event details to your backend API
    console.log('Event created:', eventDetails);
    // Clear the form after submission
    setEventDetails({
      eventName: '',
      eventDate: '',
      eventLocation: '',
      eventDescription: '',
      eventBanner: null,
      tickets: []
    });
  };

  return (
    <div className="event-organizers">
      <h1>Welcome Event Organizers</h1>
      {!isAuthenticated ? (
        <div className="organizer-signup">
          <h2>Sign Up</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSignup} className="signup-form">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit" className="signup-button">Sign Up</button>
          </form>
        </div>
      ) : !hasPaid ? (
        <Payment onPaymentSuccess={handlePaymentSuccess} />
      ) : (
        <div className="organizer-features">
          <div className="feature">
            <h2>Create Events</h2>
            <p>Easily create and manage your events with our user-friendly interface.</p>
            <form onSubmit={handleEventCreation} className="event-form">
              <input
                type="text"
                name="eventName"
                placeholder="Event Name"
                value={eventDetails.eventName}
                onChange={handleEventInputChange}
                required
              />
              <input
                type="date"
                name="eventDate"
                value={eventDetails.eventDate}
                onChange={handleEventInputChange}
                required
              />
              <input
                type="text"
                name="eventLocation"
                placeholder="Event Location"
                value={eventDetails.eventLocation}
                onChange={handleEventInputChange}
                required
              />
              <textarea
                name="eventDescription"
                placeholder="Event Description"
                value={eventDetails.eventDescription}
                onChange={handleEventInputChange}
                required
              />
              <input
                type="file"
                name="eventBanner"
                onChange={handleEventInputChange}
                required
              />
              <div className="tickets-section">
                <h3>Tickets</h3>
                {eventDetails.tickets.map((ticket, index) => (
                  <div key={index} className="ticket">
                    <input
                      type="text"
                      placeholder="Ticket Type"
                      value={ticket.ticketType}
                      onChange={(e) => handleTicketChange(index, 'ticketType', e.target.value)}
                      required
                    />
                    <input
                      type="number"
                      placeholder="Ticket Price"
                      value={ticket.ticketPrice}
                      onChange={(e) => handleTicketChange(index, 'ticketPrice', e.target.value)}
                      required
                    />
                    <input
                      type="number"
                      placeholder="Ticket Quantity"
                      value={ticket.ticketQuantity}
                      onChange={(e) => handleTicketChange(index, 'ticketQuantity', e.target.value)}
                      required
                    />
                  </div>
                ))}
                <button type="button" onClick={addTicket}>Add Ticket</button>
              </div>
              <button type="submit" className="create-event-button">Create Event</button>
            </form>
          </div>
          <div className="feature">
            <h2>Track Sales</h2>
            <p>Monitor your ticket sales and revenue in real-time.</p>
          </div>
          <div className="feature">
            <h2>Manage Attendees and Interactions</h2>
            {/*<p>
              Effortlessly manage attendee lists, engage with attendees through messaging, and gather valuable feedback to enhance event experiences.
              Additional functionalities like attendee list, messaging, etc. can be added here.
            </p>*/}
            <AttendeeList attendees={attendees} />
            <CheckInSystem />
            <MessagingSystem attendees={attendees} />
            <FeedbackForms />
            <NetworkingTools />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventOrganizers;