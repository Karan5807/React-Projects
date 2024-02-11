import Exchange from "./Pages/Exchange/Exchange";
import EPFandPPF from "./Pages/EPF & PPF/EPFandPPF";
import FDandRD from "./Pages/FD & RD/FDandRD";
import SIPandMF from "./Pages/SIP & MF/SIPandMF";
import EMICalculator from './Pages/EMI/EMICalculator';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Exchange />} />
          <Route path="/ProvidentFund" element={<EPFandPPF />} />
          <Route path="/Deposit" element={<FDandRD />} />
          <Route path="/MutualFund" element={<SIPandMF />} />
          <Route path="/EMI" element={<EMICalculator />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
