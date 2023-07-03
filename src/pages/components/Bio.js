import React from "react";

function Bio() {
  return (
    <div className="bio-container">
      <div className="bio-profile-picture"></div>

      <div className="bio-text-block">
        <div className="bio-name">
          <p>Chris Young</p>
        </div>
        <div className="bio-text">
          <p>
            As a certified hypnotherapist and life coach with over a thousand
            successful cases, I have dedicated my life to helping people achieve
            goals and overcome challenges. With years of experience and training
            from the most accredited school for hypnotherapy, The Hypnosis
            Motivation Institute (HMI), I have honed my skills to help clients
            break free from limiting beliefs, overcome fears, and reach their
            full potential. I am a Master Hypnotist and Certified Hypnotherapist
            in the AHA, and have also studied NLP, Circle Therapy, Systematic
            Desensitization and Reiki to provide my clients with a holistic
            approach to healing.
          </p>
        </div>
      </div>
      <div className="bio-text-block2">
        <p>
          My empathic nature has been with me since childhood, and it allows me
          to connect with my clients on a deep level, understanding their needs
          and guiding them toward positive change.
        </p>
        <p>
          Apart from my work as a hypnotherapist, I have also been involved in
          various community initiatives, serving as a city commissioner for over
          20 years and helping start a 501C3 non-profit that focuses on keeping
          inner-city kids out of gangs and drugs through martial arts, and I'm
          on the board of another nonprofit. I have also been a therapist on
          staff at a world-famous detox spa, providing meditation and health
          classes for over a decade.
        </p>
        <p>
          My passion for helping people is rooted in my belief that everyone has
          the ability to transform their lives. I have been recognized for my
          contributions to the community by senators, the sheriff of Los
          Angeles, police departments, fire departments, mayors, and city
          commissions, and the ex-police chief of Los Angeles, whom I brought in
          to be the chair of my nonprofit organization.
        </p>
        <p className="bio-tagline">
          Let's work together to unlock your full potential and create a life
          you love.
        </p>
      </div>
    </div>
  );
}

export default Bio;
