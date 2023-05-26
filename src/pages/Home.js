import React from "react";
import Header from "../Header";
import Fixables from "../Fixables";
import Bio from "../Bio";
import Testimonies from "../Testimonies";

import "../App.css";

export function Home() {
  return (
    <div>
      <Header />
      <Fixables />
      <Bio />
      <Testimonies />
    </div>
  );
}

export default Home;
