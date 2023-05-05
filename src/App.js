import React from "react";
import Header from "./Header";
import Fixables from "./Fixables";
import Bio from "./Bio";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="body">
        <Header />
        <Fixables />
        <Bio />
        <div className="testimonies">
          <div className="testimony-cards">
            <div className="testimony-card">
              <p className="testimony">
                Prior to putting me under, Chris took the time to get to know me
                and my objectives. He cared about my overall well-being, which
                is what made me trust him. I don't know how he does it, but what
                he does works.
              </p>
              <p className="testifier">-Michael Waddington-Lawyer</p>
            </div>{" "}
            <div className="testimony-card">
              <p className="testimony">
                I am a contractor and have the day to day stress of work, so a
                friend recommended Chris and I thought what the hell. I am a
                very skeptical person and thought that I probably would not go
                under, but Chris has a way with energy that makes you trust him
                and I went under and came too crying because I released so much.
                This is something I never do, so I was amazed and felt much
                better. I would Highly recommend Chris Young for Getting your
                life back on track.
              </p>
              <p className="testimony">Thank you Chris</p>
              <p className="testifier">-Mike Bonetti-Contractor</p>
            </div>
            <div className="testimony-card">
              <p className="testimony">
                I went to see Chris because I was full of anxiety before my
                wedding. As a doctor I am probably more open than most about the
                healing of the mind, but had my doubts that he could put me
                under or actually calm my nerves. Chris has very trusting energy
                and I felt very comfortable with him putting me under hypnosis,
                which actually happened. When I awoke I had no more stress or
                anxiety about the wedding and all went as planned with positive
                energy. Thank you Chris!
              </p>
              <p className="testifier">-Dr. David Redd</p>
            </div>
            <div className="testimony-card">
              <p className="testimony">
                Chris Young and hypnotism saved my sanity. I work in the film
                industry. In my job, I go from production to production. I met
                Chris Young while working in a high stress, toxic environment. I
                found myself raising my voice on the phone and in meetings “just
                to be heard.” Chris mentioned hypnotism as a way of changing
                habits. I have never had much faith in hypnotism, but thought I
                would give it a try. We spoke and decided when my triggered
                response was to yell, I would laugh. I walked out of our first
                session thinking I never went “under”, so I thought maybe this
                wasn’t for me. The next day I found myself on the phone with an
                actor’s manager who thought by bullying he could get his way.
                When I tried to speak, he yelled over me and I started to laugh.
                This took him aback. He didn’t like to be laughed at. I
                explained my session with Chris and said if he didn’t want to be
                laughed at we had to have a two-way conversation. This approach
                works well for me. I don’t think I ever went back to those toxic
                knee-jerk reactions. In one session with Chris, things changed
                immediately. After a few more sessions with Chris I really felt
                less stress and more focused and have been using his traits now
                for many years with my acting students.
              </p>
              <p className="testifier">
                -Mark Tillman-MARK TILLMAN-BRIGGLE Casting CSA
              </p>
            </div>
            <div className="testimony-card">
              <p className="testimony">
                Thank you Chris for an empowering & healing hypnotherapy
                session! I have learned to take a long term approach to personal
                growth, but the effects of Chris’s session clarified my vision,
                helped process trauma, and manifested results even quicker than
                I had hoped. I have known Chris for several years and can attest
                to his integrity, kindness and generosity in all matters.
              </p>
              <p className="testifier">
                -Shirley Braha-MTV Producer-Author-Marnie the Dog
              </p>
            </div>
            <div className="testimony-card">
              <p className="testimony">
                If you’ve been thinking about trying hypnotherapy, Chris is your
                guy. I attended the same hypnotherapy school as Chris and have
                had sessions from the top in this field and Chris is a true
                master. I would consider myself a difficult subject, and after
                just one session, I felt that Chris was able to take me far
                deeper than I have been in the past and facilitated profound
                healing in just one session. Chris has a thorough understanding
                of the hypnotic process and decades of experience. Chris can
                guide you to break through whatever is holding you back from
                living your best life. I’m grateful to know him and would trust
                him completely with anything I need help with.
              </p>
              <p className="testifier">-Linda Pallini C.Ht.-Therapist</p>
            </div>
            <div className="testimony-card">
              <p className="testimony">
                I came from a rough background and never thought any type of
                therapy would reach me and when I went to Chris for hypnotherapy
                I did not think it would work. I actually brought a friend with
                a camera to record it just in case and the funny thing is he
                went under first watching and did not record a thing and then I
                went under and awoke with such emotional release that I actually
                cried, which is something I do not do often. Chris has a gift!
              </p>
              <p className="testifier">
                -Terry Amos-Author: The Rules of the Game
              </p>
            </div>
            <div className="testimony-card">
              <p className="testimony">
                Chris has completely turned me into a believer! He helped me
                overcome binge eating compulsions, texture sensitivities, severe
                PMS symptoms, and cognitive dysfunction. My body and mind are
                improved drastically from his guidance. The life long value I’ve
                received is absolutely priceless.
              </p>
              <p className="testifier">
                -Benzi Holler-Programmer and Community Organizer
              </p>
            </div>
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
