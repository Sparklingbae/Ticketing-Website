/* eslint-disable no-unused-vars */
import React from "react"
const SignUp = () => {
  return (
    <><nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-lg font-bold">EventPlug</a>
        {/*<div>
          <a href="/" className="text-gray-300 hover:text-white mx-2">Home</a>
          <a href="/eventlist" className="text-gray-300 hover:text-white mx-2">Event List</a>
          <a href="/create" className="text-gray-300 hover:text-white mx-2">Create Event</a>
          <a href="/about" className="text-gray-300 hover:text-white mx-2">About</a>
          <a href="/login" className="text-gray-300 hover:text-white mx-2">Login</a>
          <a href="/register" className="text-gray-300 hover:text-white mx-2">Sign Up</a>
        </div>*/}
      </div>
    </nav>
    <div className=" mt-0.2 mb-0.2 container bg-white shadow-lg rounded-lg p-12">
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              SignUp to your EventPlug Account
            </h2>
        <form>
          <div className="flex min-h-full flex-1 flex-col justify-center px-12 py-12 lg:px-12">
            <div className="input-box">
              <span className="details block font-semibold mb-2">Full Name</span>
              <input type="text" placeholder="Enter your name" required className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="input-box">
              <span className="details block font-semibold mb-2">Username</span>
              <input type="text" placeholder="Enter your username" required className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="input-box">
              <span className="details block font-semibold mb-2">Email</span>
              <input type="email" placeholder="Enter your email" required className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="input-box">
              <span className="details block font-semibold mb-2">Phone Number</span>
              <input type="tel" placeholder="Enter your number" required className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="input-box">
              <span className="details block font-semibold mb-2">Password</span>
              <input type="password" placeholder="Enter your password" required className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="input-box">
              <span className="details block font-semibold mb-2">Confirm Password</span>
              <input type="password" placeholder="Confirm your password" required className="w-full p-2 border border-gray-300 rounded" />
            </div>
          </div>
          <div className="gender-details my-0">
            <span className="gender-title block font-semibold mb-2">Gender</span>
            <div className="category flex justify-between items-center">
              <label className="flex items-center">
                <input type="radio" name="gender" value="male" className="mr-2" />
                <span className="gender">Male</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" value="female" className="mr-2" />
                <span className="gender">Female</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" value="prefer-not-to-say" className="mr-2" />
                <span className="gender">Prefer not to say</span>
              </label>
            </div>
          </div>
          <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
                </button>
              </div>
            </form>
      </div>
    </>
  );
}
export default SignUp;