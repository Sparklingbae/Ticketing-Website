/* eslint-disable no-unused-vars */
import { About, Events, Footer, Navbar } from "./components"

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
      </div>
      <Events />
      <About />
      <Footer />
    </div>  
  )
}

export default App
