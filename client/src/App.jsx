import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Events from './components/Events';
import EventList from './components/EventList';
import About from './components/About';
import CreateEvent from "./components/CreateEvent";
import Review from './components/Review';
import Login from "./components/Login";
import Signup from './components/Signup';
import HeroSection from './components/HeroSection'

const App = () => {

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/eventlist" element={<EventList />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/reviews" element={<Review />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/navbar" element={<Navbar />} />
        </Routes>
        </BrowserRouter>
    <HeroSection />
    </div>
  )
}

export default App