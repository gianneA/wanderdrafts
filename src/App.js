import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Bohol from "./pages/posts/Bohol";
import Toledo from "./pages/posts/Toledo";
import EzCafe from "./pages/posts/EzCafe";
import LaVie from "./pages/posts/LaVie";
import Guillen from "./pages/posts/Guillen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bohol" element={<Bohol />} />
        <Route path="/toledo" element={<Toledo />} />
        <Route path="/ezcafe" element={<EzCafe />} />
        <Route path="/lavie" element={<LaVie />} />
        <Route path="/guillen" element={<Guillen />} />
      </Routes>
    </Router>
  );
}

export default App;
