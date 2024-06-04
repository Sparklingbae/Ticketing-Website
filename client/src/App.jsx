/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import EventList from "./components/EventList"
import Home from './components/Home'

const App = () => {

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} /> 
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/create" element={<EventList />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/eventlist" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
  
  )
}

export default App