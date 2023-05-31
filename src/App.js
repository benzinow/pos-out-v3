import React from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sauna } from "./pages/Sauna";
import Footer from "./pages/components/Footer";
import { Certifications } from "./pages/Certifications";
import { Resources } from "./pages/Resources";
import { FAQ } from "./pages/Faq";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <div className="body">
        <Routes onUpdate={() => window.scrollTo(0, 0)}>
          <Route path="/" element={<Home />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/sauna" element={<Sauna />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
