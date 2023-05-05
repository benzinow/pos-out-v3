import React from "react";
import Header from "./Header";
import Fixables from "./Fixables";
import Bio from "./Bio";
import Testimonies from "./Testimonies";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="body">
        <Header />
        <Fixables />
        <Bio />
        <Testimonies />
        <Footer />
      </div>
    </div>
  );
}

export default App;
