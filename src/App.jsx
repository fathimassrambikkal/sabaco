import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Scroll from "./components/Scroll"; // ✅ Import Scroll here

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Technical from "./pages/Technical";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <HashRouter>
      <Navbar />

      {/* ✅ Scroll listens to route changes */}
      <Scroll />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/technical" element={<Technical />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;
