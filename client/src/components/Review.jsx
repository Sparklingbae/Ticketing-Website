import React, { useState } from 'react';
import './Review.css';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview('');
  };

  return (
    <div>
      <h1>Event Reviews</h1>
      <form onSubmit={handleReviewSubmit}>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit Review</button>
      </form>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    </div>
  );
};

export default Review;