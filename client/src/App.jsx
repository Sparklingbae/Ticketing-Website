/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import EventList from "./components/EventList"
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import HeroSection from './components/HeroSection'
import CreateEvent from './components/CreateEvent'
import EventOrganizers from './components/EventOrganizers'

const App = () => {

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} /> 
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/create" element={<CreateEvent />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/eventlist" element={<EventList />} />
            <Route path="/organizers" element={<EventOrganizers />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </BrowserRouter>
        <main>
        <section className="hero">
        <img src="Cover.jpg"  />
      </section>
    </main>
    <a href="/about" className="text-sm font-semibold leading-6 text-blue-900">
            About Us</a>
      <Footer />
    </div>
  )
}

export default App