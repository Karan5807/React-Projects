import FirstScreen from "./Pages/Login Screen/FirstScreen";
import Home from "./Pages/Home Screen/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FirstScreen />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
