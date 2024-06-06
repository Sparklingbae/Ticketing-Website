/* eslint-disable no-unused-vars */
import React from 'react';

const EventList = () => {
  // Sample event data
  const events = [
    { id: 1, name: 'Sparkling Concert', date: '2024-06-10', location: 'Lagos Island', description: 'Get ready to shine! A night of dazzling performances and unforgettable fun!', attendees: 100 },
    { id: 2, name: 'Rida Night With Friends', date: '2024-06-25', location: 'Abuja City', description: 'Vibin with Squad! Laughter, music,and unforgettable memories with crew!', attendees: 50 },
    { id: 3, name: 'Lopez Home Coming', date: '2024-07-20', location: 'Enugu', description: 'A heartwarming celebration of return, reunion, and joy!', attendees: 200 }
];
    return (
      <div>
      <h2>Event List</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
          {events.map(event => (
              <li key={event.id} style={{ marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
                  <h3>{event.name}</h3>
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Location:</strong> {event.location}</p>
                  <p>{event.description}</p>
                  <p><strong>Attendees:</strong> {event.attendees}</p>
                  <button style={{ padding: '5px 10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>View Details</button>
              </li>
          ))}
      </ul>
  </div>
    );
};

export default EventList;