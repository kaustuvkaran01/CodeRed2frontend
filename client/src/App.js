import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Signin from "./pages/Login";
import Signup from "./pages/Register";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Signin />} />
          <Route exact path="/register" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
