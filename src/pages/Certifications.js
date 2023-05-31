import React from "react";
import cert1 from "./images/cert01.png";
import cert2 from "./images/cert02.png";
import cert3 from "./images/cert03.png";
import cert4 from "./images/cert04.jpg";
import cert5 from "./images/cert05.png";
import cert6 from "./images/cert06.png";
import cert7 from "./images/cert07.jpg";
import cert8 from "./images/cert08.png";
import cert9 from "./images/cert09.png";

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
      </div>{" "}
    </div>
  );
}
