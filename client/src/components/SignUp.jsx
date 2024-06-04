/* eslint-disable no-unused-vars */
import React from "react"

const SignUp = () => {
  return (
    <><nav className="bg-gray-800 p-4">
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
    <div className="container"></div>
    <div className="title">SignUP</div><form>
        <div className="user-details"></div>
          <div className="input-box">
            <span className="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="input-box">
            <span className="details">Username</span>
            <input type="text" placeholder="Enter your username" required />
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your email" required />
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" required />
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input type="text" placeholder="Enter your password" required />
          </div>
          <div className="input-box">
            <span className="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div className="gender-details">
          <span className="genter-title">Gender</span>
          <div className="category">
          
            <span className="dot-one"></span>
            <span className="gender">Male</span>
            </label>
            <label for="">
            <span className="dot-one"></span>
            <span className="gender">Female</span>
            </label>
            <label for="">
            <span className="dot-one"></span>
            <span className="gender">Prefer not to say</span>
            </label>
        </div>
        </div>
        <div className="button">
          <input type="submit" value="SingUp"></input>
        </div>
      </form></>
  );
}
export default SignUp