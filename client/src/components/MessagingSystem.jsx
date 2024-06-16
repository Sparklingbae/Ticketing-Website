// src/components/MessagingSystem.jsx

import React from 'react';

const MessagingSystem = ({ attendees }) => {
  const handleSendMessage = (message) => {
    // Handle sending message functionality
    console.log('Sending message:', message);
  };

  return (
    <div className="messaging-system">
      <h3>Messaging System</h3>
      {/*<p>Allow organizers to send updates, reminders, or announcements directly to attendees.</p>*/}
      <textarea placeholder="Enter your message here"></textarea>
      <button onClick={() => handleSendMessage()}>Send Message</button>
    </div>
  );
};

export default MessagingSystem;