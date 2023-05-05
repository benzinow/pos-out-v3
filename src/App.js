import React from "react";
import Header from "./Header";
import Fixables from "./Fixables";
import Bio from "./Bio";
import Testimonies from "./Testimonies";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="body">
        <Header />
        <Fixables />
        <Bio />
        <Testimonies />
      </div>
    </div>
  );
}

export default App;
