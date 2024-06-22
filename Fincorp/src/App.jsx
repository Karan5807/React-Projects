import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exchange from "./Pages/Exchange";
import Emi from "./Pages/Emi";
import Home from "./Pages/Home";
import Mutalfund from "./Pages/Mutalfund";
import Providentfund from "./Pages/Providentfund";
import Recuring from "./Pages/Recuring";
import './App.css'

function App() {
  return (
    <div className='min-h-screen bg-white'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Exchange" element={<Exchange/>} />
          <Route path="/ProvidentFund" element={<Providentfund />} />
          <Route path="/Deposit" element={<Recuring />} />
          <Route path="/MutualFund" element={<Mutalfund />} />
          <Route path="/EMI" element={<Emi />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
