/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import EventList from "./components/EventList"
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import HeroSection from './components/HeroSection'
import EventOrganizers from './components/EventOrganizers'

const App = () => {

  return (
<<<<<<< HEAD
      <><div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
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
    </div><Footer /></>
=======
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} /> 
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/create" element={<EventList />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/eventlist" element={<Home />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </BrowserRouter>
        <main>
        <section className="hero">
        <img src="Cover.jpg" alt="Cover" />
      </section>
    </main>
        
      <Footer />
    
    </div>
>>>>>>> 5d7ce1fa1f380520533eddcd0f36030c403464f0
  )
}

export default App