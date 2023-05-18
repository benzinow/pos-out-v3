import React, { useRef, useEffect } from "react";

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
    function handleScroll(e) {
      const value = e.target.documentElement.scrollTop;
      if (value <= 200) {
        palm1Ref.current.style.left = value * -0.6 + "px";
        palm2Ref.current.style.left = value * 0.6 + "px";
        palm3Ref.current.style.left = value * -0.05 + "px";
        palm4Ref.current.style.left = value * 0.05 + "px";
        palm5Ref.current.style.left = value * -1 + "px";
        palm6Ref.current.style.left = value * 1 + "px";
        palm1Ref.current.style.top = value * 0.3 + "px";
        palm2Ref.current.style.top = value * 0.3 + "px";
        palm3Ref.current.style.top = value * 0.3 + "px";
        palm4Ref.current.style.top = value * 0.3 + "px";
        palm5Ref.current.style.top = value * 0.3 + "px";
        palm6Ref.current.style.top = value * 0.3 + "px";
        palm7Ref.current.style.top = value * 0.2 + "px";
        palm8Ref.current.style.top = value * -0.5 + "px";
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
          <div className="header-button">Request Your Free Consultation</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
