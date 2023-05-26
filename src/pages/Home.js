import React from "react";
import Header from "./components/Header";
import Fixables from "./components/Fixables";
import Bio from "./components/Bio";
import Testimonies from "./components/Testimonies";

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
