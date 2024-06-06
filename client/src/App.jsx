/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import EventList from "./components/EventList"
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import HeroSection from './components/HeroSection'
import CreateEvent from './components/CreateEvent'

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
            <Route path="/about" element={<About />} />
            <Route path="/landingpage" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
        
      <Footer />
    
    </div>
  
  )
}

export default App