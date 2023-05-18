import React from "react";
import Request from "./Request";
import "./fixables.css";

function Fixables() {
  return (
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
            individuals quit smoking. During a session, you will be guided into
            a state of deep relaxation becoming more open to suggestion. We then
            work to reprogram your subconscious mind, helping you to view
            smoking in a negative light and promoting healthier habits and
            coping mechanisms. I will help you identify possible underlying
            emotional or psychological issues that are contributing to smoking
            habits. Hypnotherapy can create powerful insight towards your
            journey to a nicotine-free life!
          </p>
        </div>
      </div>
      <div className="solution-tagline">Hypnosis is the solution you seek.</div>
      <Request />
    </div>
  );
}

export default Fixables;
