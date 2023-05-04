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
            <div className="fix-bubble fix-bubble-active">Quit Smoking</div>
            <div className="fix-bubble">Manage Pain</div>
            <div className="fix-bubble">Overcome Fears</div>
          </div>
          <div className="fix-facts">
            <div className="fix-facts-icon"></div>
            <div className="fix-facts-text">
              <p>
                Hypnotherapy has been shown to be an effective tool for helping
                individuals quit smoking. During a session, you'll be guided
                into a state of deep relaxation where you'll become more open to
                suggestion. I will then work with you to reprogram your
                subconscious mind, helping you to view smoking in a negative
                light and promoting healthier habits and coping mechanisms. I'll
                also help you identify any underlying emotional or psychological
                issues that are contributing to your smoking habit. Hypnotherapy
                can be a powerful tool in your journey to quit smoking!
              </p>
            </div>
          </div>
          <div className="solution-tagline">
            Hypnosis is the solution you’ve been looking for
          </div>
          <div className="request-box">
            <div className="design-line"></div>
            <div className="request-button">
              <p>Request Appointment</p>
            </div>
            <div className="design-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
