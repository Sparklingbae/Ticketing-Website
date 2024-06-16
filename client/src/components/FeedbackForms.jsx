// src/components/FeedbackForms.jsx

import React from 'react';

const FeedbackForms = () => {
  const handleFeedbackSubmit = (feedback) => {
    // Handle feedback submit functionality
    console.log('Submitting feedback:', feedback);
  };

  return (
    <div className="feedback-forms">
      <h3>Feedback Forms</h3>
    {/*<p>Provide customizable feedback forms or surveys to gather attendee opinions and insights.</p>*/}
      <textarea placeholder="Enter your feedback here"></textarea>
      <button onClick={() => handleFeedbackSubmit()}>Submit Feedback</button>
    </div>
  );
};

export default FeedbackForms;