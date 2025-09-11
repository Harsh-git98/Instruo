import { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from './Routes';
import Navbar from './Components/Navbar/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <AllRoutes />
    </Router>
  )
}

export default App
