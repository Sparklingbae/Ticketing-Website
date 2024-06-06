/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} EventPlug. All rights reserved.</p>
        <div className="mt-4">
          <a href="http://localhost:5173/about" className="text-blue-500">About Us</a>
          <a href="/contact" className="text-gray-300 hover:text-white mx-2">Contact</a>
          <a href="/privacy" className="text-gray-300 hover:text-white mx-2">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;