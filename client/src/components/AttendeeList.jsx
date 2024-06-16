// src/components/AttendeeList.jsx

import React from 'react';

const AttendeeList = ({ attendees }) => {
  const handleViewDetails = (attendee) => {
    // Handle view details functionality
    console.log('Viewing details for:', attendee);
  };

  const handleManageStatus = (attendee) => {
    // Handle manage status functionality
    console.log('Managing status for:', attendee);
  };

  return (
    <div className="attendee-list">
      <h3>Attendee List</h3>
      {attendees.length === 0 ? (
        <p>No attendees registered yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {attendees.map((attendee, index) => (
              <tr key={index}>
                <td>{attendee.name}</td>
                <td>{attendee.email}</td>
                <td>{attendee.status}</td>
                <td>
                  <button onClick={() => handleViewDetails(attendee)}>View Details</button>
                  <button onClick={() => handleManageStatus(attendee)}>Manage Status</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AttendeeList;