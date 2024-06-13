/* eslint-disable no-unused-vars */
import React from "react"

const EventList = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-lg font-bold">EventPlug</a>
        <div>
          <a href="/" className="text-gray-300 hover:text-white mx-2">Home</a>
          <a href="/eventlist" className="text-gray-300 hover:text-white mx-2">Event List</a>
          <a href="/create" className="text-gray-300 hover:text-white mx-2">Create Event</a>
          <a href="/login" className="text-gray-300 hover:text-white mx-2">Login</a>
          <a href="/register" className="text-gray-300 hover:text-white mx-2">Sign Up</a>
        </div>
      </div>
    </nav>

  
  )
}

export default EventList
