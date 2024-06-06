/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import HeroSection from './HeroSection';
import Footer from './Footer';


const Home = () => {
  return (
    <>
    <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-white text-lg font-bold">EventPlug</a>
          <div>
            <a href="/" className="text-gray-300 hover:text-white mx-2">Home</a>
            <a href="/eventlist" className="text-gray-300 hover:text-white mx-2">Event List</a>
            <a href="/create" className="text-gray-300 hover:text-white mx-2">Create Event</a>
            <a href="/about" className="text-gray-300 hover:text-white mx-2">About</a>
            <a href="/login" className="text-gray-300 hover:text-white mx-2">Login</a>
            <a href="/register" className="text-gray-300 hover:text-white mx-2">Sign Up</a>
          </div>
        </div>
      </nav>
      <header className="bg-gray-800 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">EventPlug</h1>
        <p className="text-lg">Connect with unforgettable events at your fingertips.</p>
      </header>
      <main>
      <section className="hero">
        <img src="cover.jpg.jpg" alt="Cover" />
      </section>
    </main>
      <HeroSection />
      </>
  );
};

export default Home;