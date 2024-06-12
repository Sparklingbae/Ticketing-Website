/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import HeroSection from './HeroSection';
import Footer from './Footer';
import About from './About';

const Home = () => {
  return (
    <>
          <nav className="bg-gray-800 p-4">
              <div className="container mx-auto flex justify-between items-center">
                  <a href="/" className="text-white text-lg font-bold">EventPlug</a>
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
        
        {/* Hero Section */}
        <section className="hero">
                <div className="hero-content">
                    <h1>EventPlug</h1>
                    <p>Connect with unforgettable events at your fingertips!</p>
                    <button className="cta-button">Get Started</button>
                </div>
            </section>

          {/* Feature Section */}
          <section className="features">
                <div className="feature">
                    <h2>Register your account</h2>
                    <p>To get started with Events Plug, simply register an account on our platform. Provide your basic information and create a secure login. Once registered, you'll have access to all the features and functionalities of Events Plug.</p>
                </div>
                <div className="feature">
                    <h2>Ticket Variations</h2>
                    <p>With Events Plug, event organizers have the flexibility to create various ticket types and pricing options, accommodating different attendee preferences and offering a customized ticketing experience.</p>
                </div>
                <div className="feature">
                    <h2>Support Tickets</h2>
                    <p>We have a dedicated customer support team ready to assist ticket buyers and event organizers with any inquiries, ensuring a smooth and hassle-free ticketing process.</p>
                </div>
            </section>
      </>
  );
};

export default Home;
