/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';
import Footer from './Footer';
import About from './About';
import './Home.css';

const GEOCODING_API_KEY = 'e7c91159e5c54e57a1669cc4fb60f989';


const Home = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [locationDetails, setLocationDetails] = useState({ country: '', state: '' });
  const [locationError, setLocationError] = useState('');

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });

          fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${GEOCODING_API_KEY}`)
            .then(response => response.json())
            .then(data => {
              if (data.results.length > 0) {
                const { country, state } = data.results[0].components;
                setLocationDetails({ country, state });
              }
            })
            .catch(error => {
              setLocationError('Unable to fetch location details.');
            });
        },
        (error) => {
          setLocationError(error.message);
        }
      );
    } else {
      setLocationError('Geolocation is not supported by your browser.');
    }
  }, []);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (name && reviewText && rating) {
    const newReview = { name, reviewText, rating };
    setReviews([...reviews, newReview]);
    setName('');
    setReviewText('');
    setRating(0);
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setMessage('Thank you for subscribing!');
      setEmail('');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <>
    <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-white text-lg font-bold">EventPlug</a>
          <div>
            {/*<Link to="/" className="text-gray-300 hover:text-white mx-2">Home</Link>
            <Link to="/organizers" className="text-gray-300 hover:text-white mx-2">Event Organizers</Link>*/}
            {/* Add other links as needed */}
          </div>
           {/* <div>
            <a href="/" className="text-gray-300 hover:text-white mx-2">Home</a>
            <a href="/eventlist" className="text-gray-300 hover:text-white mx-2">Event List</a>
            <a href="/create" className="text-gray-300 hover:text-white mx-2">Create Event</a>
            <a href="/about" className="text-gray-300 hover:text-white mx-2">About</a>
            <a href="/login" className="text-gray-300 hover:text-white mx-2">Login</a>
            <a href="/register" className="text-gray-300 hover:text-white mx-2">Sign Up</a> 
          </div>*/}
        </div>
      </nav>
      {/*<header className="bg-gray-800 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">EventPlug</h1>
        <p className="text-lg">Connect with unforgettable events at your fingertips.</p>
      </header>*/}
      {/* Geolocation Section */}
      <section className="geolocation">
        <h2>Your Location</h2>
        {location.latitude && location.longitude ? (
          <p>Country: {locationDetails.country}, State: {locationDetails.state}</p>
        ) : (
          <p>{locationError ? locationError : 'Loading location...'}</p>
        )}
      </section>
      
    {/* Hero Section */}
    <section className="hero">
                <div className="hero-content">
                    <h1>Find and Create Unforgettable Events</h1>
                    <p>Join millions of people who discover and create events on our platform. From concerts to workshops, theres something for everyone.</p>
                    <button className="cta-button">Get Started</button>
                </div>
            </section>
    {/* Feature Section */}
<section className="features">
    <div className="feature">
        <img src="register.jpg" alt="Register your account" className="feature-image" />
        <h2>Register your account</h2>
        <p>
            To get started with EventPlug, simply register an account on our platform.
            Provide your basic information and create a secure login. Once registered, you'll 
            have access to all the features and functionalities of EventPlug.
        </p>
    </div>
    <div className="feature">
        <img src="ticket.jpg" alt="Ticket Variations" className="feature-image" />
        <h2>Ticket Variations</h2>
        <p>
            With EventPlug, event organizers have the flexibility to create various ticket types 
            and pricing options, accommodating different attendee preferences and offering a 
            customized ticketing experience.
        </p>
    </div>
    <div className="feature">
        <img src="support.jpg" alt="Support Tickets" className="feature-image" />
        <h2>Support Tickets</h2>
        <p>
            We have a dedicated customer support team ready to assist ticket buyers and event 
            organizers with any inquiries, ensuring a smooth and hassle-free ticketing process.
        </p>
    </div>
</section>
{/* Review Section */}
<section className="reviews">
        <h2>User Reviews</h2>
        <form onSubmit={handleReviewSubmit} className="review-form">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="review-input"
            required
          />
          <textarea
            placeholder="Your Review"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="review-input"
            required
          />
          <div className="star-rating">
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;
              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                  />
                  <FaStar
                    className="star"
                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                    size={30}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
          <button type="submit" className="review-submit-button">Submit Review</button>
        </form>
        <div className="review-list">
          {reviews.map((review, index) => (
            <div key={index} className="review">
              <h3>{review.name}</h3>
              <div className="star-rating">
                {[...Array(5)].map((star, i) => (
                  <FaStar
                    key={i}
                    className="star"
                    color={i < review.rating ? "#ffc107" : "#e4e5e9"}
                    size={20}
                  />
                ))}
              </div>
              <p>{review.reviewText}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="newsletter">
        <h2>Subscribe to our Newsletter</h2>
        <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-submit-button">Subscribe</button>
        </form>
        {message && <p className="newsletter-message">{message}</p>}
      </section>
      
 {/* Call-to-action Section */}
 <section className="cta">
                <h2>MORE! For Your Attendees To Get Excited About</h2>
                <button className="cta-button">Get These Result</button>
            </section>

            <HeroSection />
      </>
  );
};

export default Home;