import React from "react";
import Request from "./components/Request";
import { Img } from "react-image";
import cert1 from "./images/cert001.png";
import cert2 from "./images/cert002.jpg";
import cert3 from "./images/cert003.png";
import cert4 from "./images/cert004.png";
import cert5 from "./images/cert005.jpg";
import cert6 from "./images/cert006.png";
import cert7 from "./images/cert007.png";
import cert8 from "./images/cert008.png";
import cert9 from "./images/cert009.png";
import cert10 from "./images/cert010.jpg";
import cert11 from "./images/cert011.png";
import cert12 from "./images/cert012.jpg";
import cert13 from "./images/cert013.jpg";
import cert14 from "./images/cert014.png";
import cert15 from "./images/cert015.jpg";
import cert16 from "./images/cert016.png";
import cert17 from "./images/cert017.png";
import cert18 from "./images/cert018.png";
import cert19 from "./images/cert019.png";

export function Certifications() {
  const certificateImages = [
    cert1,
    cert2,
    cert3,
    cert4,
    cert5,
    cert6,
    cert7,
    cert8,
    cert9,
    cert10,
    cert11,
    cert12,
    cert13,
    cert14,
    cert15,
    cert16,
    cert17,
    cert18,
    cert19,
  ];

  return (
    <div>
      <h1 className="page-title">Certifications and Awards</h1>
      <div className="certifications-frames">
        {certificateImages.map((image, index) => (
          <Img
            key={index}
            className="certifications-frame"
            src={image}
            loader={<div className="placeholder" />} // Display a placeholder while the image is loading
          />
        ))}
      </div>
      <Request />
    </div>
  );
}
