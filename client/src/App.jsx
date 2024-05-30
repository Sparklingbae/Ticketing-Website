
import { Navbar, EventList,Footer } from "./components"
import Login from "./components/Login"
import SignUp from "./components/SignUp"

const App = () => {

  return (
      <div className="App">
        <Navbar />
        <EventList />
        <Footer />
        <Login />
        <SignUp />
      </div>
  
  )
}

export default App
