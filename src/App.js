import React from "react";
import Header from "./Header";
import Fixables from "./Fixables";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="body">
        <Header />
        <Fixables />
      </div>
    </div>
  );
}

export default App;
