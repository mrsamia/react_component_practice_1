import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';


const myrouter=(
  <div>
    <Router>
      <ul>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Team">Team</Link>
      <Link to="/Contact">Contact</Link>
      </ul>


      <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Team" element={<Team/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>

    </Router>
    
    
  </div>
)





ReactDOM.render(
  myrouter,
  document.getElementById("root")
);
