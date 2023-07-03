import React from "react";
import Request from "./components/Request";

import noSmokingImage from "./images/no-smoke.svg";
import stressImage from "./images/stress.svg";
import weightImage from "./images/weight.svg";
import successImage from "./images/goal.svg";
import esteemImage from "./images/self-love.svg";
import noAlcoholImage from "./images/no-alcohol.svg";
import studyImage from "./images/study.svg";
import memoryImage from "./images/memory.svg";
import healingImage from "./images/heal.svg";
import balanceImage from "./images/balance.svg";
import moreImage from "./images/and-more.svg";

import relaxImage from "./images/relaxation.svg";
import concentrationImage from "./images/concentration.svg";
import understandingImage from "./images/understanding.svg";
import sleepImage from "./images/sleep.svg";
import interpersonalImage from "./images/interpersonal.svg";
import freeImage from "./images/freedom.svg";
import relationshipImage from "./images/relationships.svg";

import athleteImage from "./images/athlete.svg";
import caregiverImage from "./images/caregiver.svg";
import artistImage from "./images/artist.svg";
import anyoneImage from "./images/anyone.svg";
import studentImage from "./images/student.svg";
import proImage from "./images/professional.svg";
import dentalImage from "./images/dental.svg";

export function FAQ() {
  return (
    <div className="faq-page">
      <h1 className="page-title">FAQ</h1>
      <p className="tagline">
        I'm excited to provide you with information about my approach to
        Hypnotherapy, its benefits, and what you can expect during a session. If
        you have any further questions or concerns, please don't hesitate to
        reach out to me directly.
      </p>
      <div className="faq-cards">
        <div className="faq-card">
          <p className="question">What is Hypnotherapy?</p>
          <p className="answer">
            Hypnotherapy is my passion and expertise. It's a therapeutic
            approach that harnesses the power of your subconscious mind to
            address and resolve various issues. Through this process, I help
            individuals like you overcome challenges, change damaging behaviors,
            and achieve personal growth and well-being.
          </p>
        </div>
        <div className="faq-card">
          <p className="question">What is Hypnotherapy used for?</p>
          <ul>
            <li>
              <img className="faq-icon" src={stressImage} alt="Topic Icon" />
              <p className="answer">
                Stress: Managing and reducing stress levels.
              </p>
            </li>
            <li>
              <img className="faq-icon" src={noSmokingImage} alt="Topic Icon" />
              <p className="answer">
                Smoking cessation: Overcoming the habit of smoking and becoming
                a non-smoker.
              </p>
            </li>
            <li>
              <img className="faq-icon" src={weightImage} alt="Topic Icon" />
              <p className="answer">
                Weight control: Achieving and maintaining a healthy weight.
              </p>
            </li>
            <li>
              <img className="faq-icon" src={successImage} alt="Topic Icon" />
              <p className="answer">
                Success orientation: Cultivating a mindset of success and
                achievement.
              </p>
            </li>
            <li>
              <img className="faq-icon" src={esteemImage} alt="Topic Icon" />
              <p className="answer">
                Self-esteem: Building confidence and improving self-worth.
              </p>
            </li>
            <li>
              <img className="faq-icon" src={noAlcoholImage} alt="Topic Icon" />
              <p className="answer">
                Alcohol and substance abuse: Overcoming addiction and developing
                healthier habits.
              </p>
            </li>
            <li>
              <img className="faq-icon" src={studyImage} alt="Topic Icon" />
              <p className="answer">
                Improving study habits: Enhancing focus, concentration, and
                learning abilities.
              </p>
            </li>
            <li>
              <img className="faq-icon" src={dentalImage} alt="Topic Icon" />
              <p className="answer">
                Preparing for dental and medical procedures: Alleviating anxiety
                and enhancing readiness for dental and medical treatments.
              </p>
            </li>
            <li>
              <img className="faq-icon" src={memoryImage} alt="Topic Icon" />
              <p className="answer">
                Memory improvement: Strengthening memory and cognitive
                functions.
              </p>
            </li>
            <li>
              <img className="faq-icon" src={healingImage} alt="Topic Icon" />
              <p className="answer">
                Healing past traumas: Addressing and releasing emotional wounds
                from the past.
              </p>
            </li>
            <li>
              <img className="faq-icon" src={balanceImage} alt="Topic Icon" />
              <p className="answer">
                Balance and focus: Cultivating a sense of balance and improving
                attention.
              </p>
            </li>
            <li>
              <img className="faq-icon" src={moreImage} alt="Topic Icon" />
              <p className="answer">
                More: Hypnotherapy can be applied to various other areas for
                personal growth and improvement.
              </p>
            </li>
          </ul>
        </div>
        <div className="faq-card">
          <p className="question">How Does Hypnotherapy Work?</p>
          <p className="answer">
            During our sessions together, conducted over Zoom in the comfort of
            your own home, I create a safe and supportive environment where we
            can explore the power of your subconscious mind. Through
            visualization, deep-level breathing, and relaxation techniques, I
            help you release the negatives of your past and move forward without
            the baggage that may have been holding you back.
          </p>
          <p className="answer">
            Open and honest communication is essential in our journey together.
            By taking the time to understand your energy and listening to your
            unique experiences, we can unmask traumas from the past and address
            them effectively under hypnosis.
          </p>
          <p className="answer">
            Using techniques such as systematic desensitization, neurolinguistic
            programming, and circle therapy, we tap into your subconscious mind.
            Together, we introduce positive and reinforcing symbols to reprogram
            negative patterns and foster personal growth and positive change.
          </p>
        </div>
        <div className="faq-card">
          <p className="question">What are the benefits of Hypnotherapy?</p>
          <ul>
            <li>
              <img className="faq-icon" src={esteemImage} alt="Topic Icon" />
              <p className="answer">
                Self-love and better health: Developing a sense of
                self-acceptance and taking steps towards improved physical and
                mental well-being.
              </p>
            </li>
            <li>
              <img
                className="faq-icon"
                src={understandingImage}
                alt="Topic Icon"
              />
              <p className="answer">
                Self-understanding: Gaining more profound insights into your
                thoughts, emotions, and behaviors.
              </p>
            </li>
            <li>
              <img className="faq-icon" src={dentalImage} alt="Topic Icon" />
              <p className="answer">
                Better dental and medical experiences: Minimizing fear and
                discomfort during dental and medical procedures, promoting a
                positive treatment journey.
              </p>
            </li>
            <li>
              <img className="faq-icon" src={relaxImage} alt="Topic Icon" />
              <p className="answer">
                Relaxation: Learning techniques to induce relaxation, reduce
                anxiety, and promote overall calmness.
              </p>
            </li>
            <li>
              <img className="faq-icon" src={sleepImage} alt="Topic Icon" />
              <p className="answer">
                Improved sleeping habits: Overcoming insomnia and achieving
                restful sleep.
              </p>
            </li>
            <li>
              <img
                className="faq-icon"
                src={concentrationImage}
                alt="Topic Icon"
              />
              <p className="answer">
                Enhanced concentration: Boosting focus and concentration
                abilities.
              </p>
            </li>
            <li>
              <img
                className="faq-icon"
                src={interpersonalImage}
                alt="Topic Icon"
              />
              <p className="answer">
                Better interpersonal skills: Learning effective communication
                and interaction methods.
              </p>
            </li>
            <li>
              <img className="faq-icon" src={successImage} alt="Topic Icon" />
              <p className="answer">
                Goal achievement: Setting and achieving personal and
                professional goals.
              </p>
            </li>
            <li>
              <img className="faq-icon" src={freeImage} alt="Topic Icon" />
              <p className="answer">
                Freedom from bad habits: Overcoming addictions and unhealthy
                habits, such as smoking or substance abuse.
              </p>
            </li>
            <li>
              <img
                className="faq-icon"
                src={relationshipImage}
                alt="Topic Icon"
              />
              <p className="answer">
                Improved relationships: Enhancing personal relationships and
                fostering stronger connections.
              </p>
            </li>
            <li>
              <img className="faq-icon" src={weightImage} alt="Topic Icon" />
              <p className="answer">
                Weight management: Adopting healthy eating habits and
                maintaining a balanced weight.
              </p>
            </li>
          </ul>
        </div>
        <div className="faq-card">
          <p className="question">Who can benefit from Hypnotherapy?</p>
          <p className="answer">
            Hypnotherapy is a versatile approach that can benefit individuals
            from all walks of life.
          </p>
          <ul>
            <li>
              <img className="faq-icon" src={proImage} alt="Topic Icon" />
              <p className="answer">
                Business professionals: Managing stress, improving productivity,
                and achieving success with less anxiety.
              </p>
            </li>
            <li>
              <img className="faq-icon" src={athleteImage} alt="Topic Icon" />
              <p className="answer">
                Athletes: Enhancing focus, concentration, and mental resilience
                for peak performance.
              </p>
            </li>
            <li>
              <img className="faq-icon" src={caregiverImage} alt="Topic Icon" />
              <p className="answer">
                Parents and caregivers: Learning effective strategies for stress
                management, self-care, and fostering healthy family dynamics.
              </p>
            </li>
            <li>
              <img className="faq-icon" src={artistImage} alt="Topic Icon" />
              <p className="answer">
                Artists and performers: Overcoming stage fright, boosting
                confidence, and enhancing creative expression.
              </p>
            </li>
            <li>
              <img className="faq-icon" src={studentImage} alt="Topic Icon" />
              <p className="answer">
                Students: Improving study habits, memory retention, and academic
                performance.
              </p>
            </li>
            <li>
              <img className="faq-icon" src={anyoneImage} alt="Topic Icon" />
              <p className="answer">
                Anyone seeking personal growth and positive change!
              </p>
            </li>
          </ul>
        </div>
        <div className="faq-card">
          <p className="question">What Does Hypnotherapy Feel Like?</p>
          <p className="answer">
            Hypnotherapy, or hypnosis, is a deeply tranquil experience. Many
            clients I have worked with have reported feelings of floating,
            tingling sensations, lightness, and pure bliss during their
            sessions. It's important to note that hypnosis is a natural state
            that you enter willingly and comfortably, guided by my expertise and
            support.
          </p>
          <p className="answer">
            Please remember that the information provided here is just a
            starting point. Each individual's experience with Hypnotherapy is
            unique, and I tailor my approach to meet your specific needs and
            goals.
          </p>
          <p className="answer">
            I'm here to support you on your journey to personal growth and
            transformation. If you have any further questions or wish to
            schedule a session, don't hesitate to contact me directly. Together,
            we can unlock your inner potential and create positive change in
            your life.
          </p>
        </div>
        <div className="faq-card">
          <p className="question">
            {" "}
            To provide you with a well-rounded understanding, here are some
            crucial facts about Hypnotherapy.
          </p>

          <ol>
            <li className="answer">
              1. Hypnosis induces a calm and relaxed mind, similar to deep
              sleep. While in this state, the conscious mind recedes, and the
              subconscious mind becomes accessible. After a session, clients
              often feel refreshed and rejuvenated, and their physical
              appearance may appear younger.
            </li>
            <li className="answer">
              2. Hypnosis is accessible to everyone. Each individual may
              experience varying depths of hypnosis, ranging from light
              (hypnoidal) to medium (cataleptic) and deep (somnambulistic). The
              depth of hypnosis depends on individual characteristics and
              preferences, whether they are more physically or emotionally
              oriented. People experience light hypnotic states naturally
              throughout their daily lives, sometimes without even realizing it.
            </li>
            <li className="answer">
              3. You cannot be hypnotized against your will. Hypnosis is a
              collaborative process that requires your active participation and
              consent. You remain in control throughout the session, and no one
              can make you do anything you don't want to do.
            </li>
            <li className="answer">
              4. Hypnosis is not mind control. While in a hyper-suggestible
              state, you retain your values, beliefs, and integrity. The
              suggestions the hypnotherapist provides align with your goals and
              desires, promoting positive change.
            </li>
            <li className="answer">
              5. Studies suggest that higher intelligence facilitates ease of
              hypnosis as long as one doesn't overanalyze every aspect of their
              life. Hypnosis is a tool that individuals from various
              intellectual backgrounds can effectively utilize.
            </li>
          </ol>
        </div>
      </div>
      <p className="tagline">
        Don't hesitate to contact me if you have any further questions or wish
        to schedule a session. I am here to support you on your journey to
        personal growth and transformation.
      </p>
      <Request />
    </div>
  );
}
