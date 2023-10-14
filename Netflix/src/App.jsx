import Home from "./Pages/Home Screen/Home";
import FirstScreen from "./Pages/Login Screen/FirstScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FirstScreen />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
