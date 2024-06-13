/* eslint-disable no-unused-vars */
// Reviews.jsx
import React from 'react';

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="reviews-list">
        {[
                  {
                      id: 1,
                      name: 'Sparking',
                      role: 'Event Enthusiast',
                      comment: 'EventPlug has revolutionized the way I discover events in my area. With its intuitive interface and comprehensive event listings, I never miss out on exciting opportunities. Highly recommend!'
                  },
                  {
                      id: 2,
                      name: 'Rida',
                      role: 'Event Organizer',
                      comment: 'As an event organizer, I rely on EventPlug to reach a wider audience and promote my events effectively.The platforms user-friendly tools and robust features make event management a breeze. Thanks, EventPlug!'
                  },
                  {
                      id: 3,
                      name: 'Lopez',
                      role: 'Business Professional',
                      comment: 'EventPlug is a game-changer for networking and professional development. From industry conferences to local meetups, Ive found valuable opportunities to connect and grow my network. Kudos to the EventPlug team!'
                  },
                  // Add more reviews as needed
                ].map(reviews => (
          <div key={reviews.id} className="reviews">
            <p className="comment">{reviews.comment}</p>
            <p className="name">{reviews.name}</p>
            <p className="role">{reviews.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;