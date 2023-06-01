import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const palm1Ref = useRef(null);
  const palm2Ref = useRef(null);
  const palm3Ref = useRef(null);
  const palm4Ref = useRef(null);
  const palm5Ref = useRef(null);
  const palm6Ref = useRef(null);
  const palm7Ref = useRef(null);
  const palm8Ref = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const value = window.scrollY;
      if (palm1Ref.current) {
        palm1Ref.current.style.transform = `translate3d(${value * -0.6}px, ${
          value * 0.1
        }px, 0)`;
      }
      if (palm2Ref.current) {
        palm2Ref.current.style.transform = `translate3d(${value * 0.6}px, ${
          value * 0.1
        }px, 0)`;
      }
      if (palm3Ref.current) {
        palm3Ref.current.style.transform = `translate3d(${value * -0.05}px, ${
          value * 0.09
        }px, 0)`;
      }
      if (palm4Ref.current) {
        palm4Ref.current.style.transform = `translate3d(${value * 0.05}px, ${
          value * 0.08
        }px, 0)`;
      }
      if (palm5Ref.current) {
        palm5Ref.current.style.transform = `translate3d(${value * -1}px, ${
          value * 0.07
        }px, 0)`;
      }
      if (palm6Ref.current) {
        palm6Ref.current.style.transform = `translate3d(${value * 1}px, ${
          value * 0.06
        }px, 0)`;
      }
      if (palm7Ref.current) {
        palm7Ref.current.style.transform = `translate3d(0, ${
          value * 0.05
        }px, 0)`;
      }
      if (palm8Ref.current) {
        palm8Ref.current.style.transform = `translate3d(0, ${
          value * -0.18
        }px, 0)`;
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header">
      <div className="parallax">
        <div className="animation-layer palm7" ref={palm7Ref}></div>
        <div className="animation-layer palm6" ref={palm6Ref}></div>
        <div className="animation-layer palm5" ref={palm5Ref}></div>
        <div className="animation-layer palm4" ref={palm4Ref}></div>
        <div className="animation-layer palm3" ref={palm3Ref}></div>
        <div className="animation-layer palm2" ref={palm2Ref}></div>
        <div className="animation-layer palm1" ref={palm1Ref}></div>
        <div className="mind" ref={palm8Ref}>
          <h2>Your mind can move mountains!</h2>
        </div>
        <div className="first">
          <div className="tagline">Let me show you how.</div>
          <h1>Positive Outlooks</h1>
          <div className="header-button">
            <Link to="/contact" className="header-button-text">
              Request Your Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
