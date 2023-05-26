import React, { useState } from "react";
import Request from "./Request";

// Import the images
import smokingImage from "../images/smoking.svg";
import stressImage from "../images/stress.svg";
import weightImage from "../images/weight.svg";
import painImage from "../images/pain.svg";
import fearImage from "../images/fear.svg";

function Fixables() {
  const [selectedTopic, setSelectedTopic] = useState("Quit Smoking");

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  const getImageSource = (topic) => {
    const imageSources = {
      "Quit Smoking": smokingImage,
      "Reduce Stress": stressImage,
      "Lose Weight": weightImage,
      "Manage Pain": painImage,
      "Overcome Fears": fearImage,
    };

    return imageSources[topic];
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
        <img
          className="fix-facts-icon"
          src={getImageSource(selectedTopic)}
          alt="Topic Icon"
        />
        <div className="fix-facts-text">
          {selectedTopic === "Reduce Stress" && (
            <p>
              Stress can significantly impact our daily lives, affecting our
              well-being and overall quality of life. Through hypnotherapy, you
              can find effective ways to reduce anxiety and regain control.
              During a session, you will experience deep relaxation and
              heightened receptiveness to positive suggestion. Together, we will
              work on reprogramming your subconscious mind, enabling you to
              perceive triggers differently and develop healthier coping
              mechanisms. Let's uncover the underlying factors contributing to
              your stress and pave the way for a calmer and more balanced life.
            </p>
          )}
          {selectedTopic === "Lose Weight" && (
            <p>
              Losing weight can be a challenging journey, but with the help of
              hypnotherapy, you can achieve lasting results. During our
              sessions, you will enter a state of deep relaxation, where your
              subconscious mind becomes open to positive suggestions and new
              perspectives. Together, we will address the root causes of
              overeating or unhealthy habits, establish a healthy relationship
              with food, and develop motivation and willpower to achieve your
              weight loss goals. Let's embark on this transformative journey
              towards a healthier, fitter, and more confident you.
            </p>
          )}
          {selectedTopic === "Quit Smoking" && (
            <p>
              Quitting smoking is a life-changing decision that can greatly
              improve your health and well-being. Through hypnotherapy, you can
              tap into the power of your subconscious mind to break free from
              the smoking habit. Our sessions will focus on reprogramming
              deep-seated beliefs and associations related to smoking,
              strengthening your willpower, and developing healthier coping
              strategies. Together, we will work towards your goal of becoming a
              non-smoker, empowering you to live a smoke-free and healthier
              life.
            </p>
          )}
          {selectedTopic === "Manage Pain" && (
            <p>
              Chronic pain can be debilitating, affecting various aspects of
              your life. Hypnotherapy offers a natural and effective approach to
              pain management, helping you regain control and find relief. By
              accessing your subconscious mind, we can address the underlying
              factors contributing to your pain and modify your perception of
              it. Through relaxation techniques, visualization, and suggestion,
              we will work together to reduce pain intensity, promote healing,
              and improve your overall well-being. Let's embark on this journey
              towards a life with less pain and more comfort.
            </p>
          )}
          {selectedTopic === "Overcome Fears" && (
            <p>
              Fears and phobias can significantly limit your life experiences
              and hold you back from reaching your full potential. Hypnotherapy
              can help you overcome these fears by reprogramming your
              subconscious mind and replacing negative associations with
              positive ones. Together, we will explore the root causes of your
              fears and work towards releasing them. Through relaxation and
              guided imagery, you will learn to respond differently to triggers,
              gaining confidence and freedom. Let's take the courageous step
              forward and conquer your fears, opening doors to new possibilities
              and personal growth.
            </p>
          )}
        </div>
      </div>
      <Request />
    </div>
  );
}

export default Fixables;
