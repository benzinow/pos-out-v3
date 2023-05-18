import React, { useState } from "react";
import Request from "./Request";

function Fixables() {
  const [selectedTopic, setSelectedTopic] = useState("Quit Smoking");

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="fixables">
      <div className="fix-bubbles">
        <div
          className={`fix-bubble ${
            selectedTopic === "Reduce Stress" ? "fix-bubble-active" : ""
          }`}
          onClick={() => handleTopicClick("Reduce Stress")}
        >
          Reduce Stress
        </div>
        <div
          className={`fix-bubble ${
            selectedTopic === "Lose Weight" ? "fix-bubble-active" : ""
          }`}
          onClick={() => handleTopicClick("Lose Weight")}
        >
          Lose Weight
        </div>
        <div
          className={`fix-bubble ${
            selectedTopic === "Quit Smoking" ? "fix-bubble-active" : ""
          }`}
          onClick={() => handleTopicClick("Quit Smoking")}
        >
          Quit Smoking
        </div>
        <div
          className={`fix-bubble ${
            selectedTopic === "Manage Pain" ? "fix-bubble-active" : ""
          }`}
          onClick={() => handleTopicClick("Manage Pain")}
        >
          Manage Pain
        </div>
        <div
          className={`fix-bubble ${
            selectedTopic === "Overcome Fears" ? "fix-bubble-active" : ""
          }`}
          onClick={() => handleTopicClick("Overcome Fears")}
        >
          Overcome Fears
        </div>
      </div>
      <div className="fix-facts">
        <div className="fix-facts-icon"></div>
        <div className="fix-facts-text">
          {selectedTopic === "Reduce Stress" && (
            <p>Information specific to the "Reduce Stress" topic goes here.</p>
          )}
          {selectedTopic === "Lose Weight" && (
            <p>Information specific to the "Lose Weight" topic goes here.</p>
          )}
          {selectedTopic === "Quit Smoking" && (
            <p>
              Hypnotherapy has been shown to be an effective tool for helping
              individuals quit smoking. During a session, you will be guided
              into a state of deep relaxation becoming more open to suggestion.
              We then work to reprogram your subconscious mind, helping you to
              view smoking in a negative light and promoting healthier habits
              and coping mechanisms. I will help you identify possible
              underlying emotional or psychological issues that are contributing
              to smoking habits. Hypnotherapy can create powerful insight
              towards your journey to a nicotine-free life!
            </p>
          )}
          {selectedTopic === "Manage Pain" && (
            <p>Information specific to the "Manage Pain" topic goes here.</p>
          )}
          {selectedTopic === "Overcome Fears" && (
            <p>Information specific to the "Overcome Fears" topic goes here.</p>
          )}
        </div>
      </div>
      <div className="solution-tagline">Hypnosis is the solution you seek.</div>
      <Request />
    </div>
  );
}

export default Fixables;
