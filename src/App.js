import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import HowItWorks from "./components/pages/HowItWorks";
import Appointment from "./components/pages/Appointment";
import Status from "./components/pages/Status";
import Admin from "./components/pages/Admin";
import List from "./components/pages/List";

function App() {
  // const [auth, setAuth] = useState(null);

  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/status" element={<Status />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
