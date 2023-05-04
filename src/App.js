import React from "react";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="body">
        <Header />
        <div className="fixables">
          <div className="fix-bubbles">
            <div className="fix-bubble">Reduce Stress</div>
            <div className="fix-bubble">Lose Weight</div>
            <div className="fix-bubble">Quit Smoking</div>
            <div className="fix-bubble">Manage Pain</div>
            <div className="fix-bubble">Overcome Fears</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
