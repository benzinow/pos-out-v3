import React from "react";
import Request from "./components/Request";
import cert1 from "./images/cert001.png";
import cert2 from "./images/cert002.jpg";
import cert3 from "./images/cert003.png";
import cert4 from "./images/cert004.jpg";
import cert5 from "./images/cert005.png";
import cert6 from "./images/cert006.png";
import cert7 from "./images/cert007.png";
import cert8 from "./images/cert008.png";
import cert9 from "./images/cert009.jpg";
import cert10 from "./images/cert010.png";
import cert11 from "./images/cert011.png";
import cert12 from "./images/cert012.png";
import cert13 from "./images/cert013.jpg";
import cert14 from "./images/cert014.png";
import cert15 from "./images/cert015.png";

export function Certifications() {
  return (
    <div>
      <h1 className="page-title">Certifications and Awards</h1>
      <div className="frames">
        <img className="frame" src={cert1} alt="Topic Icon" />
        <img className="frame" src={cert2} alt="Topic Icon" />
        <img className="frame" src={cert3} alt="Topic Icon" />
        <img className="frame" src={cert4} alt="Topic Icon" />
        <img className="frame" src={cert5} alt="Topic Icon" />
        <img className="frame" src={cert6} alt="Topic Icon" />
        <img className="frame" src={cert7} alt="Topic Icon" />
        <img className="frame" src={cert8} alt="Topic Icon" />
        <img className="frame" src={cert9} alt="Topic Icon" />
        <img className="frame" src={cert10} alt="Topic Icon" />
        <img className="frame" src={cert11} alt="Topic Icon" />
        <img className="frame" src={cert12} alt="Topic Icon" />
        <img className="frame" src={cert13} alt="Topic Icon" />
        <img className="frame" src={cert14} alt="Topic Icon" />
        <img className="frame" src={cert15} alt="Topic Icon" />
      </div>
      <Request />
    </div>
  );
}
