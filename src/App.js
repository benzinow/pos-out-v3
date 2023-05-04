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
        <div className="bio">
          <div className="profile-picture"></div>

          <div className="bio-text-block">
            <div className="name">
              <p>Chris Young</p>
            </div>
            <div className="bio-text">
              <p>
                As a Certified Hypnotherapist and Life Coach with over a
                thousand successful cases, I have dedicated my life to helping
                people achieve their goals and overcome their challenges. With
                years of experience and training from the most accredited school
                for Hypnotherapy, the Hypnosis Motivation Institute, I have
                honed my skills to help clients break free from limiting
                beliefs, overcome fears, and reach their full potential. I am a
                Master Hypnotist and Certified Hypnotherapist in the AHA, and
                have also studied NLP, Circle Therapy, Systematic
                Desensitization and Reiki to provide my clients with a holistic
                approach to healing.
              </p>
            </div>
          </div>
          <div className="bio-text-block2">
            <p className="what">
              My empathic nature has been with me since childhood, and it allows
              me to connect with my clients on a deep level, understanding their
              needs and guiding them towards positive change.
            </p>
            <p className="what">
              Apart from my work as a hypnotherapist, I have also been involved
              in various community initiatives, serving as a city commissioner
              for over 20 years and helping start a 501C3 non-profit that
              focuses on keeping inner-city kids out of gangs and drugs through
              martial arts. I have also been a therapist on staff at the
              world-famous We Care detox spa, providing meditation and health
              classes for over a decade.
            </p>
            <p className="what">
              My passion for helping people is rooted in my belief that everyone
              has the ability to transform their lives. I have been recognized
              for my contributions to the community by Senators, the Sheriff of
              Los Angeles, Police Departments, Fire Departments, Mayors, and
              city commissions.
            </p>
            <p className="bio-tagline">
              Let's work together to unlock your full potential and create a
              life you love.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
